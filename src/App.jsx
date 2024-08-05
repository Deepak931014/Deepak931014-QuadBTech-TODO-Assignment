import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        <div className="flex-1 flex flex-col">
          <Header />
          <TaskList />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
