import React, { useState } from 'react';
import Search from './components/Search'; 
import ImageList from './components/Imagelist'; 
import HomeImages from './components/HomeImages';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    // Update the search query state when the search button is clicked
    setSearchQuery(query);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <ImageList searchQuery={searchQuery} />
      <HomeImages />
    </div>
  );
}

export default App;
