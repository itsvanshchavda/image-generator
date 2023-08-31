import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import axios from 'axios'; 

const API_KEY = 'PIfE0HIIDNX5qbr5WLHIaNBl7s-w3KpCuMBYZDc4h6A';

function ImageList({ searchQuery }) {

  const [images, setImages] = useState([]);

  const cardStyle = {
    width: '400px',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  };

  const imageStyle = {
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: '70%',
  };



  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos/?query=${searchQuery}&client_id=${API_KEY}`);
        const imageData = response.data.results; // Assuming "results" contains the array of images
        setImages(imageData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
  
    if (searchQuery) {
      // Fetch images only when there's a search query
      fetchImages(); 
    }
  }, [searchQuery]);
  

  return (
    <div>
      <Row>
        {images.map(image => (
          <Col key={image.id}>
            <Card style={cardStyle}>
              <Card.Img
                variant="top"
                src={image.urls.full}
                alt={image.description}
                style={imageStyle}
                width={400}
                height={800}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}  

export default ImageList;
