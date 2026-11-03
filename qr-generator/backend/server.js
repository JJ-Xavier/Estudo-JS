const express = require("express");
const QRCode = require("qrcode");
const cors = require("cors");
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.post("/generate-qr", async (req, res) => {
try {
const { text } = req.body;
if (!text) {
return res.status(400).json({
error: "Texto não informado"
});
}
const qrDataUrl = await QRCode.toDataURL(text);
res.json({
qrCode: qrDataUrl
});
} catch (error) {
console.error(error);
res.status(500).json({
error: "Erro ao gerar QR Code"
});
}
});
app.listen(port, () => {
console.log(`Servidor executando na porta ${port}`);
});