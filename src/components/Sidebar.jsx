import React from 'react';
import img from '../../public/abc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCalendarDay, faStar, faBook, faTasks, faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ taskCount, onFilterChange }) => {
  return (
    <div className="w-64 p-4 bg-gray-100 dark:bg-gray-800 min-h-screen md:sticky top-0">
      <div className="text-center mb-4">
        <img
          src={img}
          alt="Avatar"
          className="w-16 h-16 rounded-full mx-auto"
        />
        <p className="text-black dark:text-white">Hey, ABCD</p>
      </div>
      <nav>
        <ul>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              onClick={() => onFilterChange('all')}
            >
              <FontAwesomeIcon icon={faList} className="text-black dark:text-white" />
              <span className="ml-2 text-black dark:text-white">All Tasks</span>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              onClick={() => onFilterChange('today')}
            >
              <FontAwesomeIcon icon={faCalendarDay} className="text-black dark:text-white" />
              <span className="ml-2 text-black dark:text-white">Today</span>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              onClick={() => onFilterChange('important')}
            >
              <FontAwesomeIcon icon={faStar} className="text-black dark:text-white" />
              <span className="ml-2 text-black dark:text-white">Important</span>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              onClick={() => onFilterChange('planned')}
            >
              <FontAwesomeIcon icon={faBook} className="text-black dark:text-white" />
              <span className="ml-2 text-black dark:text-white">Planned</span>
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              onClick={() => onFilterChange('assigned')}
            >
              <FontAwesomeIcon icon={faTasks} className="text-black dark:text-white" />
              <span className="ml-2 text-black dark:text-white">Assigned to me</span>
            </a>
          </li>
          <li className="mt-4">
            <a href="#" className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <FontAwesomeIcon icon={faPlus} className="text-black dark:text-white" />
              <span className="ml-2 text-black dark:text-white">Add list</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <h2 className="text-center text-xl mb-4 text-black dark:text-white">Today Tasks</h2>
        <div className="flex justify-center">
          <div className="w-24 h-24">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <circle
                cx="18"
                cy="18"
                r="16"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-gray-200 dark:text-gray-600"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-green-500"
                strokeDasharray={`${(100 * taskCount.completed) / taskCount.total || 0} 100`}
              />
            </svg>
            <div className="text-center mt-2 text-black dark:text-white">{taskCount.total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
