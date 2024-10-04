import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, onPlanetClick }) => {
  // State to track open/close status of moons list for each planet
  const [expandedMoons, setExpandedMoons] = useState({});

  // Toggle moons visibility for the clicked planet
  const toggleMoons = (planet) => {
    setExpandedMoons((prevState) => ({
      ...prevState,
      [planet]: !prevState[planet] // Toggle the state for the clicked planet
    }));
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>NAVIGATION</h2>
      <ul className="planets">
      <li className='Mercury' onClick={() => onPlanetClick(1)}><a href="#">Mercury</a></li>
      <li className='Venus' onClick={() => onPlanetClick(2)}><a href="#">Venus</a></li>
      <li className='Earth' onClick={() => onPlanetClick(3)}>
          <a href="#">Earth</a>
          <ul>
              <li className='Moon' onClick={(e) => { e.stopPropagation(); onPlanetClick(13); }}>
                  <a href="#">Moon</a>
              </li>
          </ul>
      </li>
        <li className='Mars' onClick={() => onPlanetClick(4)}>
          <a href="#">Mars</a>           
           <ul>
            <li className='Phobos' onClick={(e) => { e.stopPropagation(); onPlanetClick(14); }}>
              <a href='#'>Phobos</a>
            </li>
          </ul>
        </li>
        <li className='Jupiter' onClick={() => onPlanetClick(5)}><a href="#">Jupiter</a>            <ul>
            <li className='Europa' onClick={(e) => { e.stopPropagation(); onPlanetClick(15); }}><a href='#'>Europa</a></li>
            </ul>
        </li>
        <li className='Saturn' onClick={() => onPlanetClick(6)}><a href="#">Saturn</a>            <ul>
            <li className='Titan' onClick={(e) => { e.stopPropagation(); onPlanetClick(16); }}><a href='#'>Titan</a></li>
            </ul>
        </li>
        <li className='Uranus' onClick={() => onPlanetClick(7)}>
          <a href="#">Uranus</a>
        </li>
        <li className='Neptune' onClick={() => onPlanetClick(8)}>
          <a href="#">Neptune</a>
        </li>
      </ul>

      <div className="sidebar-button" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Menu
      </div>
    </div>
  );
};

export default Sidebar;
