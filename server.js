const express = require('express');
const fetch = require('node-fetch'); // versão 2
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/proxyCadastro', async (req, res) => {
    try {
        const body = req.body;

        const response = await fetch('https://robert225.app.n8n.cloud/webhook/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => console.log(`Proxy rodando em http://localhost:${PORT}`));
