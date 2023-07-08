import React, { useState } from 'react';
import '../../styles/header.css';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="header">
      <h1 className="header-title">Subastas Online</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar películas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </header>
  );
};



export default Header;