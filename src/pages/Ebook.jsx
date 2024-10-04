import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import './Ebook.css';

const Ebook = () => {
  const [loading, setLoading] = useState(false);

  const handleLaunch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/solar';  
    }, 2000); 
  };

  return (
    <div className="ebook-container text-center">
      <h1>Orrery Web App</h1>
      <p>
        Welcome to the Orrery Web App! This interactive model of the solar system showcases 
        celestial bodies such as planets, Near-Earth Asteroids, Near-Earth Comets, and Potentially Hazardous Asteroids.
      </p>
      <p>
        Learn about our solar system and its fascinating objects. Click the button below to launch the full 3D Orrery experience and explore the solar system in real-time.
      </p>
      <p>
        The app displays live data about Near-Earth Objects (NEOs) like asteroids and comets that may pass close to our planet. Using this app, you can observe the orbits of planets and NEOs and visualize potential threats.
      </p>
      <Button variant="primary" onClick={handleLaunch} disabled={loading}>
        {loading ? <Spinner animation="border" size="sm" /> : 'Launch Orrery'}
      </Button>
    </div>
  );
};

export default Ebook;
