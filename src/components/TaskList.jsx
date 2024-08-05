import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Adjust the import path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSync, faCalendarAlt, faStar, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

const initialTasks = [
  { id: 1, text: 'Buy groceries', completed: false, important: false },
  { id: 2, text: 'Finish project report', completed: false, important: true },
  { id: 3, text: 'Call the bank', completed: false, important: false },
  { id: 4, text: 'Schedule dentist appointment', completed: false, important: false },
  { id: 5, text: 'Plan weekend trip', completed: false, important: false },
  { id: 6, text: 'Read a book', completed: true, important: false },
  { id: 7, text: 'Clean the house', completed: true, important: false },
  { id: 8, text: 'Prepare presentation', completed: true, important: false },
  { id: 9, text: 'Update blog', completed: true, important: false },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [filter, setFilter] = useState('all');

  const updateTaskCount = (tasks) => {
    const completed = tasks.filter(task => task.completed).length;
    const total = tasks.length;
    return { completed, total };
  };

  const addTask = () => {
    if (newTask.trim()) {
      const updatedTasks = [
        ...tasks,
        { id: Date.now(), text: newTask, completed: false, important: false }
      ];
      setTasks(updatedTasks);
      setNewTask('');
      setShowInput(false);
    }
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const toggleImportant = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, important: !task.important } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = () => {
    switch (filter) {
      case 'today':
        // Implement logic for today’s tasks (e.g., by due date if available)
        return tasks; // Placeholder; replace with actual logic
      case 'important':
        return tasks.filter(task => task.important);
      case 'planned':
        // Implement logic for planned tasks (e.g., by date if available)
        return tasks; // Placeholder; replace with actual logic
      case 'assigned':
        // Implement logic for tasks assigned to user
        return tasks; // Placeholder; replace with actual logic
      default:
        return tasks;
    }
  };

  const taskCount = updateTaskCount(tasks);

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar taskCount={taskCount} onFilterChange={setFilter} />
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4 flex-col md:flex-row">
          <h1 className="text-2xl">To Do</h1>
          <button
            onClick={() => setShowInput(!showInput)}
            className="p-2 bg-green-500 text-white rounded mt-4 md:mt-0"
          >
            ADD TASK
          </button>
        </div>
        <div className="flex items-center mb-4 space-x-4">
          <FontAwesomeIcon icon={faBell} className="text-gray-500 cursor-pointer" />
          <FontAwesomeIcon icon={faSync} className="text-gray-500 cursor-pointer" />
          <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500 cursor-pointer" />
        </div>
        {showInput && (
          <div className="flex mb-4 flex-col md:flex-row">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1 p-2 text-black border rounded mb-2 md:mb-0 md:mr-2"
              placeholder="Add a new task"
            />
            <button onClick={addTask} className="p-2 bg-green-500 text-white rounded">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        )}
        <div className="space-y-2">
          {filteredTasks().filter(task => !task.completed).map((task) => (
            <div key={task.id} className="flex items-center p-2 border rounded mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span>{task.text}</span>
              <FontAwesomeIcon
                icon={faStar}
                className={`ml-auto cursor-pointer ${task.important ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => toggleImportant(task.id)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="ml-2 cursor-pointer text-red-500"
                onClick={() => deleteTask(task.id)}
              />
            </div>
          ))}
        </div>
        <h2 className="text-xl mt-8 mb-4">Completed</h2>
        <div className="space-y-2">
          {filteredTasks().filter(task => task.completed).map((task) => (
            <div key={task.id} className="flex items-center p-2 border rounded mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />
              <span className="line-through">{task.text}</span>
              <FontAwesomeIcon
                icon={faStar}
                className={`ml-auto cursor-pointer ${task.important ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => toggleImportant(task.id)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="ml-2 cursor-pointer text-red-500"
                onClick={() => deleteTask(task.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
