


const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/api/games', async (req, res) => {
    try {
        const response = await axios.get('https://www.freetogame.com/api/games');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

   //node '/Users/nikitasenikov/Работа/устройство/lesson 6/hw/free-to-play-games/src/features/server.js'