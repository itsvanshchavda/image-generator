
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import App from '../App';


function Search({ onSearch }) {

  const [query, setQuery] = useState('');

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    margin: '30px 0', // Adjust vertical margin as needed
  };

  const searchBarStyle = {
    display: 'flex',
    alignItems: 'center', // Vertically center elements
    border: '1px solid gray',
    borderRadius: '5px', // Add border radius for rounded corners
    maxWidth: '400px',
  };

  const inputStyle = {
    flex: '1', // Let the input take available width
    border: 'none', // Remove input border
    boxShadow: 'none', // Remove input box shadow
    borderRadius: '5px 0 0 5px', // Rounded left corners
    padding: '10px', // Add padding to input
  };


  const handleSearch = () => {
    // Call the onSearch callback with the current query
    onSearch(query);
  };

  return <>
    <div>
      <ul className='list'>
        <li>Home</li>
        <li>About</li>
        <li>API</li>
        <li>GitHub</li>
      </ul>
    </div>
    <div style={containerStyle}>
      <div style={searchBarStyle}>
        <Form.Control type="text" placeholder="Search..." style={inputStyle} onChange={(e) => setQuery(e.target.value)} />
        <Button variant="dark" onClick={handleSearch}>Search</Button>
      </div>
    </div>

  </>
}


export default Search;