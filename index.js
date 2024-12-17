const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Dummy data to serve
const imagesData = [
  {
    title: 'Farm 2048',
    imageUrl: 'https://k4.games/games/farm-2048/thumb_2.png',
  },
  {
    title: '2048',
    imageUrl: 'https://k4.games/games/2048-unblocked/thumb_2.png',
  },
  {
    title: 'Word Search Game',
    imageUrl: 'https://k4.games/games/word-search-game/thumb_2.png',
  },
  {
    title: 'Gift Unblock',
    imageUrl: 'https://k4.games/games/gift-unlock/thumb_2.png',
  },
  {
    title: 'Milk For Cat',
    imageUrl: 'https://k4.games/games/milk-for-cat/thumb_2.png',
  },
];

// Endpoint to get the images data
app.get('/api/images', (req, res) => {
  res.json(imagesData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
