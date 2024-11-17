const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/api/games', async (req, res) => {
    try {
        const { category } = req.query;
        console.log('Received category:', category); // Отладочная информация
        const url = category 
            ? `https://www.freetogame.com/api/games?category=${category.toLowerCase()}` 
            : `https://www.freetogame.com/api/games`;

        const response = await axios.get(url);
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