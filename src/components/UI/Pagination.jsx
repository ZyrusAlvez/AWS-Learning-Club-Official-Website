import React from 'react';

const Pagination = ({ count, currentPage, onPageChange }) => {
  return (
    <div className="max-w-[200px] sm:max-w-[300px]"> {/* Container with max width */}
      <div className="flex flex-wrap items-center gap-2"> {/* Added flex-wrap */}
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index)}
            className={`w-2 h-2 rounded-full transform transition-all duration-300 ease-in-out
              ${currentPage === index 
                ? 'bg-pink' 
                : 'bg-white'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span 
              className={`absolute inset-0 rounded-full transform
                ${currentPage === index 
                  ? 'animate-ping opacity-75 bg-pink-500' 
                  : 'opacity-0'
                } duration-300`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;