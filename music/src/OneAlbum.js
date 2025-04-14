import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TracksList from './TracksList';
import TrackLyrics from './TrackLyrics';
import TrackVideo from './TrackVideo';

const OneAlbum = () => {
  const { albumId } = useParams();
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/albums/${albumId}/tracks`);
        setTracks(response.data);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };
    fetchTracks();
  }, [albumId]);

  return (
    <div>
      <h2>Tracks for Album #{albumId}</h2>
      <TracksList tracks={tracks} onSelectTrack={setSelectedTrack} />
      {selectedTrack && (
        <>
          <TrackLyrics lyrics={selectedTrack.lyrics} />
          <TrackVideo videoURL={selectedTrack.videoURL} />
        </>
      )}
    </div>
  );
};

export default OneAlbum;
