import React from 'react';

const TrackVideo = ({ videoURL }) => (
  <div className="mb-3">
    <h5>Video</h5>
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={videoURL}
        title="Track video"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default TrackVideo;
