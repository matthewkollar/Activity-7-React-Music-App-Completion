// src/SearchAlbum.js
import React from 'react';
import SearchForm from './SearchForm';
import AlbumList from './AlbumList';

const SearchAlbum = ({ albums, onSearch, searchPhrase }) => {
  const filtered = albums.filter((album) =>
    album.albumDescription.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  return (
    <>
      <SearchForm onSubmit={onSearch} />
      <AlbumList albums={filtered} />
    </>
  );
};

export default SearchAlbum;
