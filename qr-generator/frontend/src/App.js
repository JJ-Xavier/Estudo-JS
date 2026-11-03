import React, { useState } from "react";
import "./App.css";
function App() {
const [text, setText] = useState("");
const [qrCode, setQrCode] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const handleGenerateQR = async () => {
// Validação simples
if (!text.trim()) {
setError("Por favor, digite um texto para gerar o QR Code.");
return;
}
setError("");
setLoading(true);
setQrCode("");
try {
const response = await fetch("http://localhost:3001/generate-qr", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({ text }),
});
const data = await response.json();
if (!response.ok) {
throw new Error(data.error || "Erro ao gerar QR Code");
}
setQrCode(data.qrCode);
} catch (err) {
console.error(err);
setError(err.message || "Não foi possível conectar ao servidor.");
} finally {
setLoading(false);
}
};
const handleDownload = () => {
if (!qrCode) return;
// Cria um link temporário para download da imagem
const link = document.createElement("a");
link.href = qrCode;
link.download = "qrcode.png";
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
};
return (
<div className="app">
<h1>Gerador de QR Code</h1>
<p>Digite um texto abaixo para gerar seu QR Code.</p>
<textarea
placeholder="Digite o texto aqui..."
value={text}
onChange={(e) => setText(e.target.value)}
rows={4}
/>
<button onClick={handleGenerateQR} disabled={loading}>
{loading ? "Gerando..." : "Gerar QR Code"}
</button>
{error && <p className="error">{error}</p>}
{qrCode && (
<div className="qr-container">
<h2>Seu QR Code:</h2>
<img src={qrCode} alt="QR Code gerado" />
<br />
<button onClick={handleDownload}>Baixar Imagem</button>
</div>
)}
</div>
);
}
export default App;