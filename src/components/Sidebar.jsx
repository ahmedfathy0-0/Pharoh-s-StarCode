import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [expandedPlanets, setExpandedPlanets] = useState({});
  const toggleMoons = (planet) => {
    setExpandedPlanets((prevState) => ({
      ...prevState,
      [planet]: !prevState[planet],
    }));
  };
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Navigation</h2>
      <ul className="planets">
        <li className='Mercury'><a href="/">Mercury</a></li>
        <li className='Venus'><a href="/">Venus</a></li>
        <li className='Earth'>
          <a href="/" onClick={(e) => { e.preventDefault(); toggleMoons('Earth'); }}>Earth</a>
          {expandedPlanets['Earth'] && (
            <ul>
              <li className='Moon'><a href="/">Moon</a></li>
            </ul>
          )}
        </li>
        <li className='Mars'><a href="/"onClick={(e) => { e.preventDefault(); toggleMoons('Mars'); }}>Mars</a>
          {expandedPlanets['Mars'] && (
            <ul>
              <li className='Phobos'><a href="/">Phobos</a></li>
            </ul>
          )}
        </li>
        <li className='Jupiter'><a href="/"onClick={(e) => { e.preventDefault(); toggleMoons('Jupiter'); }}>Jupiter</a>
          {expandedPlanets['Jupiter'] && (
            <ul>
              <li className='Europa'><a href="/">Europa</a></li>
            </ul>
          )}
          </li>
        <li className='Saturn'><a href="/"onClick={(e) => { e.preventDefault(); toggleMoons('Saturn'); }}>Saturn</a>
          {expandedPlanets['Saturn'] && (
            <ul>
              <li className='Titan'><a href="/">Titan</a></li>
            </ul>
          )}
          </li>
        <li className='Uranus'><a href="/">Uranus</a></li>
        <li className='Neptune'><a href="/">Neptune</a></li>
      </ul>

      <div className="sidebar-button" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Menu
      </div>
    </div>
  );
};

export default Sidebar;
