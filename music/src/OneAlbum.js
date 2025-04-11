import React from 'react';
import { useParams } from 'react-router-dom';

const OneAlbum = () => {
  const { albumId } = useParams();

  return (
    <div>
      <h2>Album Detail</h2>
      <p>You selected album ID: {albumId}</p>
    </div>
  );
};

export default OneAlbum;
