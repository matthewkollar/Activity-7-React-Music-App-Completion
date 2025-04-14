import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchAlbum from './SearchAlbum';
import NewAlbum from './NewAlbum';
import OneAlbum from './OneAlbum';
import NavBar from './NavBar';
import EditAlbum from './EditAlbum';


const App = () => {
  const [albumList, setAlbumList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/albums');
        setAlbumList(response.data);
      } catch (error) {
        console.error("Error loading album data:", error);
      }
    };
    fetchData();
  }, []);

  const updateSearchResults = (input) => {
    setSearchPhrase(input.toLowerCase());
  };

  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <SearchAlbum
                albums={albumList}
                onSearch={updateSearchResults}
                searchPhrase={searchPhrase}
              />
            }
          />
          <Route path="/add" element={<NewAlbum />} />
          <Route path="/show/:albumId" element={<OneAlbum />} />
          <Route path="/edit/:albumId" element={<EditAlbum />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
