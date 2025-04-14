import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ albumTitle, albumDescription, imgURL, linkURL, buttonText, artistId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/show/${artistId}`);
  };

  const handleEdit = (e) => {
    e.stopPropagation(); // Prevent triggering show view
    navigate(`/edit/${artistId}`);
  };

  return (
    <div className="card m-2" style={{ width: '18rem', cursor: 'pointer' }} onClick={handleClick}>
      <img src={imgURL} className="card-img-top" alt={albumTitle} />
      <div className="card-body">
        <h5 className="card-title">{albumTitle}</h5>
        <p className="card-text">{albumDescription}</p>
        <a href={linkURL} className="btn btn-primary" onClick={(e) => e.stopPropagation()}>
          {buttonText}
        </a>
        <button className="btn btn-secondary btn-sm mt-2 ms-2" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Card;
