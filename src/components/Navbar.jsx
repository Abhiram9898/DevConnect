import React from 'react';
import { Moon, Sun } from 'lucide-react';
import Button from './ui/button'; // ✅ Fix: default import

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow ">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        DevConnect
      </h1>
      <Button onClick={toggleDarkMode}>
        {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </Button>
    </nav>
  );
};

export default Navbar;
