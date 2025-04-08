import React from 'react';

const DeveloperCard = ({ dev }) => {
  return (
    <div className="hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 rounded-xl p-6 text-center border dark:border-gray-700">
      <img
        src={dev.avatar_url}
        alt={dev.login}
        className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
      />
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        {dev.login}
      </h2>
      <a
        href={dev.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-600 hover:underline mt-2 inline-block"
      >
        View GitHub Profile
      </a>
    </div>
  );
};

export default DeveloperCard;
