const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Simulated album data (same structure as albums.json)
const albums = [
  {
    artistId: 0,
    albumTitle: 'Abbey Road',
    albumDescription: 'Abbey Road is one of the most iconic albums by The Beatles, released in 1969.',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Abbey_Road',
    buttonText: 'Listen Now',
  },
  {
    artistId: 1,
    albumTitle: 'Rumours',
    albumDescription: 'Rumours is the eleventh studio album by Fleetwood Mac, released in 1977.',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG',
    linkURL: 'https://en.wikipedia.org/wiki/Rumours_(album)',
    buttonText: 'Play',
  },
  {
    artistId: 2,
    albumTitle: 'Yellow Submarine',
    albumDescription: 'Yellow Submarine is a soundtrack album by The Beatles, released in 1969.',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/a/ac/TheBeatles-YellowSubmarinealbumcover.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Yellow_Submarine_(album)',
    buttonText: 'Explore',
  },
];

// Routes
app.get('/albums', (req, res) => {
  res.json(albums);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
