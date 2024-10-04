import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Navigation</h2>
      <ul className="planets">
        <li className='Mercury'><a href="/">Mercury</a></li>
        <li className='Venus'><a href="/">Venus</a></li>
        <li className='Earth'><a href="/">Earth</a>
            <ul>
            <li className='Moon'><a href=''>Moon</a></li>
            </ul>
        </li>
        <li className='Mars'><a href="/">Mars</a>
            <ul>
            <li className='Phobos'><a href=''>Phobos</a></li>
            </ul>
        </li>
        <li className='Jupiter'><a href="/">Jupiter</a>
            <ul>
            <li className='Europa'><a href=''>Europa</a></li>
            </ul>
        </li>
        <li className='Saturn'><a href="/">Saturn</a>
            <ul>
            <li className='Titan'><a href=''>Titan</a></li>
            </ul>
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
