import React from 'react';
import TrackTitle from './TrackTitle';

const TracksList = ({ tracks, onSelectTrack }) => {
  return (
    <div className="list-group mb-4">
      {tracks.map((track) => (
        <TrackTitle key={track.id} track={track} onClick={() => onSelectTrack(track)} />
      ))}
    </div>
  );
};

export default TracksList;
