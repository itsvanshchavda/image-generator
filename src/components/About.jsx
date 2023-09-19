import React from 'react';

import { Link } from 'react-scroll';


const About = () => {
    return (
        <div className="about-container py-3 px-4 mt-5" id='about'>
            <h1 >About Image Generator</h1>
            <p>Welcome to the Image Generator project, a React.js application powered by the Unsplash API. Our mission is to provide users with a seamless experience to create stunning images for various purposes.</p>
            <p>With the integration of the Unsplash API, we offer an extensive library of high-quality, royalty-free images for you to choose from. Whether you're designing a website, creating social media content, or working on a personal project, our image generator has you covered.</p>
            <h2>Key Features:</h2>
            <ul>
                <li>Access to millions of high-resolution images from Unsplash.</li>
                <li>Intuitive user interface for easy navigation and customization.</li>
                <li>Advanced search and filtering options to find the perfect image.</li>
                <li>Effortless download and sharing functionalities.</li>
            </ul>

        </div>
    );
};

export default About;
