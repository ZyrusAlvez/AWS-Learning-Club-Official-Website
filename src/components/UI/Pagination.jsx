import React from 'react';

const Pagination = ({ count }) => {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
      ))}
    </div>
  );
};

export default Pagination;
