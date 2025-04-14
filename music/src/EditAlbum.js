import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditAlbum = () => {
  const { albumId } = useParams();
  const [albumData, setAlbumData] = useState({
    albumTitle: '',
    albumDescription: '',
    imgURL: '',
    linkURL: '',
    buttonText: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/albums`);
        const album = response.data.find(a => a.artistId.toString() === albumId);
        if (album) setAlbumData(album);
      } catch (error) {
        console.error("Error loading album:", error);
      }
    };
    fetchAlbum();
  }, [albumId]);

  const handleChange = (e) => {
    setAlbumData({ ...albumData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/albums/${albumId}`, albumData);
      navigate('/');
    } catch (error) {
      console.error('Error updating album:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Edit Album</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input name="albumTitle" className="form-control" value={albumData.albumTitle} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea name="albumDescription" className="form-control" value={albumData.albumDescription} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Image URL</label>
          <input name="imgURL" className="form-control" value={albumData.imgURL} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Link URL</label>
          <input name="linkURL" className="form-control" value={albumData.linkURL} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Button Text</label>
          <input name="buttonText" className="form-control" value={albumData.buttonText} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Update Album</button>
      </form>
    </div>
  );
};

export default EditAlbum;
