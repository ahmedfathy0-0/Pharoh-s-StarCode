import React, { useState } from 'react';
import './Sidebar.css';
import { FiArrowRight } from "react-icons/fi";
import mercuryImage from '../images/Mercury.png';
import venusImage from '../images/Venus.png';
import earthImage from '../images/Earth.png';
import moonImage from '../images/Moon.png';
import marsImage from '../images/Mars.png';
import phobosImage from '../images/Phobos.png';
import jupiterImage from '../images/Jupiter.png';
import europaImage from '../images/Europa.png';
import saturnImage from '../images/Saturn.png';
import titanImage from '../images/Titan.png';
import uranusImage from '../images/Uranus.png';
import neptuneImage from '../images/Neptune.png';

const Asteroids = {
  0 : "Eros",
  1 : "Albert",
  2 : "Alinda",
  3 : "Ganymed",
  4 : "Amor",
  5 : "Icarus",
  6 : "Betulia",
  7 : "Geographos",
  8 : "Ivar",
  9 : "Toro",
  10 : "Apollo",
  11 : "Antinous",
  12 : "Daedalus",
  13 : "Cerberus",
  14 : "Sisyphus",
  15 : "Quetzalcoatl",
  16 : "Boreas",
  17 : "Cuyo",
  18 : "Anteros",
  19 : "Tezcatlipoca",
}

const Sidebar = ({ isOpen, toggleSidebar, onPlanetClick }) => {
  const [expandedMoons, setExpandedMoons] = useState([false,false,false, false, false, false, false, false, false, false]);
  const [style, setStyle] = useState({  });
  const toggleMoons = (id) => {
    setExpandedMoons(() => ({
      [0]: false,
      [1]: false,
      [2]: false,
      [3]: false,
      [4]: false,
      [5]: false,
      [6]: false,
      [7]: false,
      [8]: false,
      [9]: false,
      [id]: true,
    }));
    setStyle({ overflow: 'auto' });
  };
  

  return (
    <div style = {style} 
      className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>NAVIGATION</h2>
      <ul className="planets">
        <li className='Mercury' onClick={() => {onPlanetClick(1); toggleSidebar(); setStyle({  });}}>
          <a href="#"> <img src={mercuryImage} alt="Mercury" />
           Mercury</a>
        </li>
        <li className='Venus' onClick={() => {onPlanetClick(2); toggleSidebar(); setStyle({});}}>
          <a href="#"> <img src={venusImage} alt="Venus" />
            Venus</a>
        </li>
        <li className='Earth' onClick={() => {onPlanetClick(3); toggleSidebar(); setStyle({ });}}>
          
          <a href="#"><img src={earthImage} alt="Earth" />
            Earth 
            {!expandedMoons[3] && (
              <FiArrowRight className="moon-icon" onClick={(e) => { e.stopPropagation(); toggleMoons(3); }} />
            )}
          </a>
          <ul className={expandedMoons[3] ? 'show' : ''}>
            <li className='Moon' onClick={(e) => {setStyle({ overflow: 'none' }); e.stopPropagation(); onPlanetClick(13);  toggleSidebar(); }}>
              
              <a href="#"><img src={moonImage} alt="Moon" />
                Moon</a>
            </li>
          </ul>
        </li>
        <li className='Mars' onClick={() => {onPlanetClick(4); toggleSidebar();}}>
          
          <a href="#"><img src={marsImage} alt="Mars" />
            Mars 
            {!expandedMoons[4] && (
              <FiArrowRight className="moon-icon" onClick={(e) => { e.stopPropagation(); toggleMoons(4); }} />
            )}
          </a>
          <ul className={expandedMoons[4] ? 'show' : ''}>
            <li className='Phobos' onClick={(e) => { e.stopPropagation(); onPlanetClick(14); toggleSidebar(); setStyle({ }); }}>
              
              <a href='#'><img src={phobosImage} alt="Phobos" />
                Phobos</a>
            </li>
          </ul>
        </li>
        <li className='Jupiter' onClick={() => {onPlanetClick(5); toggleSidebar(); setStyle({ });}}>
          
          <a href="#"><img src={jupiterImage} alt="Jupiter" />
            Jupiter 
            {!expandedMoons[5] && (
              <FiArrowRight className="moon-icon" onClick={(e) => { e.stopPropagation(); toggleMoons(5); }} />
            )}
          </a>
          <ul className={expandedMoons[5] ? 'show' : ''}>
            <li className='Europa' onClick={(e) => { e.stopPropagation(); onPlanetClick(15); toggleSidebar(); setStyle({});}}>
              
              <a href='#'><img src={europaImage} alt="Europa" />
                Europa</a>
            </li>
          </ul>
        </li>
        <li className='Saturn' onClick={() => {onPlanetClick(6); toggleSidebar(); setStyle({ });}}>
          
          <a href="#"><img src={saturnImage} alt="Saturn" />
            Saturn  
            {!expandedMoons[6] && (
              <FiArrowRight className="moon-icon" onClick={(e) => { e.stopPropagation(); toggleMoons(6);  }} />
            )}
          </a>
          <ul className={expandedMoons[6] ? 'show' : ''}>
            <li className='Titan' onClick={(e) => { e.stopPropagation(); onPlanetClick(16); toggleSidebar(); setStyle({  });}}>
              
              <a href='#'><img src={titanImage} alt="Titan" />
                Titan</a>
            </li>
          </ul>
        </li>
        <li className='Uranus' onClick={() => {toggleSidebar(); onPlanetClick(7);}}>
          
          <a href="#"><img src={uranusImage} alt="Uranus" />
            Uranus</a>
        </li>
        <li className='Neptune' onClick={() => {onPlanetClick(8); toggleSidebar(); setStyle({  });}}>
          
          <a href="#"><img src={neptuneImage} alt="Neptune" />
            Neptune</a>
        </li>
        <li className='NEO' onClick={() => {onPlanetClick(9); toggleSidebar(); setStyle({ });}}>
          <a href="#">NEOs</a>
          {!expandedMoons[9] && (
            <FiArrowRight className="moon-icon" onClick={(e) => { e.stopPropagation(); toggleMoons(9); }} />
          )}
          <ul className={expandedMoons[9] ? 'show' : ''}>
            {Object.entries(Asteroids).map(([index, asteroid]) => (
              <li key={index} className={asteroid} onClick={(e) => { e.stopPropagation(); onPlanetClick(500+parseInt(index)); toggleSidebar(); setStyle({}); }}>
                <a href="#">{asteroid}</a>
              </li>
            ))}
          </ul>
        </li>

      </ul>

      <div className="sidebar-button" onClick={() => { toggleSidebar(); setExpandedMoons([false, false, false, false, false, false, false, false]);   }}>
        {isOpen ? 'Close' : 'Open'} Menu
      </div>
    </div>
  );
};

export default Sidebar;
