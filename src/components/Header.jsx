import React from 'react';
import img from '../../public/d.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext'; // Updated to .jsx

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={`flex justify-between items-center p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} shadow-md`}>
      <div className="flex items-center space-x-4">
        <img src={img} alt="Logo" className="h-8 w-auto" />
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <FontAwesomeIcon icon={faSearch} className="text-lg" />
        </button>
        <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <FontAwesomeIcon icon={faTh} className="text-lg" />
        </button>
        <button onClick={toggleTheme} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-lg" />
        </button>
      </div>
    </header>
  );
};

export default Header;
