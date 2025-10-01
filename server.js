const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 3000; // Pode mudar

app.use(cors()); // Libera CORS para seu frontend
app.use(express.json()); // Para ler JSON do frontend

app.post('/proxyCadastro', async (req, res) => {
    try {
        const body = req.body;

        const response = await fetch('https://robert225.app.n8n.cloud/webhook/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        res.json(data); // Retorna para o frontend
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => console.log(`Proxy rodando em http://localhost:${PORT}`));
