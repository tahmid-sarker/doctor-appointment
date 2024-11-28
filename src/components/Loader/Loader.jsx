import React from 'react';

const Loader = () => {
    return (
        <div className="h-screen bg-gray-50 flex items-center justify-center">
            {/* Loading animation */}
            <div className="text-blue-600">
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
                <span className="loading loading-ball loading-xl"></span>
            </div>
        </div>
    );
};

export default Loader;