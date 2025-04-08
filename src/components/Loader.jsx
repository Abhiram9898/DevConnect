import React from 'react';

const Loader = ({ count }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-gray-300 dark:bg-gray-700 h-40 rounded-xl animate-pulse"
        />
      ))}
    </div>
  );
};

export default Loader;
