import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

const API_KEY = 'PIfE0HIIDNX5qbr5WLHIaNBl7s-w3KpCuMBYZDc4h6A';

function HomeImages() {
  const [images, setImages] = useState([]);

  const ImageStyle = {
    display: 'block',
    margin: '0 auto', // Center the image horizontally
    maxWidth: '100%', // Limit the image width to the container width
    maxHeight: '650px', // Set the maximum height of the image
  };

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos/?query=coding&client_id=${API_KEY}`);
        const imageData = response.data.results; // Assuming "results" contains the array of images
        setImages(imageData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Trending Images</h1>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index} interval={800}>
            <img
              className="d-block w-100"
              src={image.urls.regular}
              alt={`Slide ${index}`}
              style={ImageStyle}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeImages;
