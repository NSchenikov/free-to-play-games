const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/api/games', async (req, res) => {
    try {
        const { category, platform, sortBy } = req.query;

        console.log('Received parameters:', { category, platform, sortBy });

        let url = 'https://www.freetogame.com/api/games?';

        if (category) {
            url += `category=${category.toLowerCase()}&`; 
        }
        if (platform) {
            url += `platform=${platform.toLowerCase()}&`;
        }
        if (sortBy) {
            url += `sort-by=${sortBy.toLowerCase()}&`;
        }

        url = url.replace(/&$/, '');

        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});

app.get('/api/game', async (req, res) => {
    try {
        const { id } = req.query;

        if (!id) {
            console.log("ID not provided");
            return res.status(400).json({ message: 'Game ID is required' });
        }

        console.log('Fetching game data for ID:', id);
        
        const response = await axios.get(`https://www.freetogame.com/api/game?id=${id}`);
        
        if (!response.data) {
            console.log("No data received for ID:", id);
            return res.status(404).json({ message: 'Game not found' });
        }

        console.log("Game data received:", response.data); 
        
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching game data:', error); 
        return res.status(500).json({ message: 'Error fetching game data' });
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});