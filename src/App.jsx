import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Search from './components/Search';
import ImageList from './components/ImageList';
import About from './components/About';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Search onSearch={handleSearch} />
                <ImageList searchQuery={searchQuery} />
              </div>
            }
          />

          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
