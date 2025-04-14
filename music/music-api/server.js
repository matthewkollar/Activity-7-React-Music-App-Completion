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

// Simulated track list for each album
const albumTracks = {
  0: [
    { id: 1, title: "Come Together", lyrics: "Here come old flat top...", videoURL: "https://www.youtube.com/embed/45cYwDMibGo" },
    { id: 2, title: "Something", lyrics: "Something in the way she moves...", videoURL: "https://www.youtube.com/embed/UelDrZ1aFeY" }
  ],
  1: [
    { id: 3, title: "Dreams", lyrics: "Now here you go again, you say you want your freedom...", videoURL: "https://www.youtube.com/embed/YF1R2gW2Y1U" }
  ],
  2: [
    { id: 4, title: "Yellow Submarine", lyrics: "We all live in a yellow submarine...", videoURL: "https://www.youtube.com/embed/m2uTFF_3MaA" }
  ]
};

// GET /albums/:id/tracks
app.get('/albums/:id/tracks', (req, res) => {
  const albumId = req.params.id;
  const tracks = albumTracks[albumId] || [];
  res.json(tracks);
});

app.post('/albums', (req, res) => {
  const newAlbum = req.body;
  console.log('New album received:', newAlbum);
  res.status(201).json({ message: 'Album added (mock only)', album: newAlbum });
});

app.put('/albums/:id', (req, res) => {
  const updatedAlbum = req.body;
  console.log(`Updating album ${req.params.id}`, updatedAlbum);
  res.status(200).json({ message: 'Album updated (mock only)', album: updatedAlbum });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
