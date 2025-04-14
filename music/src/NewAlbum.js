import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewAlbum = () => {
  const [albumData, setAlbumData] = useState({
    albumTitle: '',
    albumDescription: '',
    imgURL: '',
    linkURL: '',
    buttonText: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAlbumData({ ...albumData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/albums', albumData);
      navigate('/'); // Redirect to homepage after adding
    } catch (error) {
      console.error('Error adding album:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Add New Album</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input name="albumTitle" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea name="albumDescription" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Image URL</label>
          <input name="imgURL" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Link URL</label>
          <input name="linkURL" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Button Text</label>
          <input name="buttonText" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Album</button>
      </form>
    </div>
  );
};

export default NewAlbum;
