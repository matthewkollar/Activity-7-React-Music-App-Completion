import React from 'react';

const TrackTitle = ({ track, onClick }) => {
  return (
    <button className="list-group-item list-group-item-action" onClick={onClick}>
      {track.title}
    </button>
  );
};

export default TrackTitle;
