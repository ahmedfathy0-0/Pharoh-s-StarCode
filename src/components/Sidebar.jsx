import React, { useState } from 'react';
import './Sidebar.css';
import { FiArrowRight } from "react-icons/fi";
import mercuryImage from '../images/mercury.png';
import venusImage from '../images/venus.png';
import earthImage from '../images/earth.png';
import moonImage from '../images/moon.png';
import marsImage from '../images/mars.png';
import phobosImage from '../images/phobos.png';
import jupiterImage from '../images/jupiter.png';
import europaImage from '../images/europa.png';
import saturnImage from '../images/saturn.png';
import titanImage from '../images/titan.png';
import uranusImage from '../images/uranus.png';
import neptuneImage from '../images/neptune.png';

const Sidebar = ({ isOpen, toggleSidebar, onPlanetClick }) => {
  const [expandedMoons, setExpandedMoons] = useState([false, false, false, false, false, false, false, false]);

  const toggleMoons = (id) => {
    setExpandedMoons(() => ({
      [0]: false,
      [1]: false,
      [2]: false,
      [3]: false,
      [4]: false,
      [5]: false,
      [6]: false,
      [id]: true,
    }));
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>NAVIGATION</h2>
      <ul className="planets">
        <li className='Mercury' onClick={() => onPlanetClick(1)}>
          <img src={mercuryImage} alt="Mercury" />
          <a href="#">Mercury</a>
        </li>
        <li className='Venus' onClick={() => onPlanetClick(2)}>
          <img src={venusImage} alt="Venus" />
          <a href="#">Venus</a>
        </li>
        <li className='Earth' onClick={() => onPlanetClick(3)}>
          <img src={earthImage} alt="Earth" />
          <a href="#">Earth 
            {!expandedMoons[3] && (
              <FiArrowRight className="moon-icon" onClick={(e) => { e.stopPropagation(); toggleMoons(3); }} />
            )}
          </a>
          <ul className={expandedMoons[3] ? 'show' : ''}>
            <li className='Moon' onClick={(e) => { e.stopPropagation(); onPlanetClick(13); }}>
              <img src={moonImage} alt="Moon" />
              <a href="#">Moon</a>
            </li>
          </ul>
        </li>
        <li className='Mars' onClick={() => onPlanetClick(4)}>
          <img src={marsImage} alt="Mars" />
          <a href="#">Mars 
            {!expandedMoons[4] && (
              <FiArrowRight className="moon-icon" onClick={(e) => { e.stopPropagation(); toggleMoons(4); }} />
            )}
          </a>
          <ul className={expandedMoons[4] ? 'show' : ''}>
            <li className='Phobos' onClick={(e) => { e.stopPropagation(); onPlanetClick(14); }}>
              <img src={phobosImage} alt="Phobos" />
              <a href='#'>Phobos</a>
            </li>
          </ul>
        </li>
        <li className='Jupiter' onClick={() => onPlanetClick(5)}>
          <img src={jupiterImage} alt="Jupiter" />
          <a href="#">Jupiter 
            {!expandedMoons[5] && (
              <FiArrowRight className="moon-icon" onClick={(e) => { e.stopPropagation(); toggleMoons(5); }} />
            )}
          </a>
          <ul className={expandedMoons[5] ? 'show' : ''}>
            <li className='Europa' onClick={(e) => { e.stopPropagation(); onPlanetClick(15); }}>
              <img src={europaImage} alt="Europa" />
              <a href='#'>Europa</a>
            </li>
          </ul>
        </li>
        <li className='Saturn' onClick={() => onPlanetClick(6)}>
          <img src={saturnImage} alt="Saturn" />
          <a href="#">Saturn  
            {!expandedMoons[6] && (
              <FiArrowRight className="moon-icon" onClick={(e) => { e.stopPropagation(); toggleMoons(6); }} />
            )}
          </a>
          <ul className={expandedMoons[6] ? 'show' : ''}>
            <li className='Titan' onClick={(e) => { e.stopPropagation(); onPlanetClick(16); }}>
              <img src={titanImage} alt="Titan" />
              <a href='#'>Titan</a>
            </li>
          </ul>
        </li>
        <li className='Uranus' onClick={() => onPlanetClick(7)}>
          <img src={uranusImage} alt="Uranus" />
          <a href="#">Uranus</a>
        </li>
        <li className='Neptune' onClick={() => onPlanetClick(8)}>
          <img src={neptuneImage} alt="Neptune" />
          <a href="#">Neptune</a>
        </li>
      </ul>

      <div className="sidebar-button" onClick={() => { toggleSidebar(); setExpandedMoons([false, false, false, false, false, false, false, false]); }}>
        {isOpen ? 'Close' : 'Open'} Menu
      </div>
    </div>
  );
};

export default Sidebar;
