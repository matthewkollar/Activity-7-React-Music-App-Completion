import React from 'react';
import Card from './Card';

const AlbumList = ({ albums }) => {
  return (
    <div className="d-flex flex-wrap justify-content-start">
      {albums.map((album) => (
        <Card
          key={album.artistId}
          artistId={album.artistId} // ✅ Needed for routing
          albumTitle={album.albumTitle}
          albumDescription={album.albumDescription}
          imgURL={album.imgURL}
          linkURL={album.linkURL}
          buttonText={album.buttonText}
        />
      ))}
    </div>
  );
};

export default AlbumList;
