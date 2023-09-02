import React from 'react';

const CommunitySearchPost = () => {
    return (
        <>
            <div className="w-auto p-6 border border-gray-300 shadow-sm rounded-xl mb-3">
                <h2 className="ml-2 font-bold text-md text-gray-700 mb-2">Search</h2>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="&#128269;"
                        className="w-full px-5 py-2 border rounded-lg focus:outline-none focus:border-red-400"
                    />
                    <span className="absolute right-4 top-2 text-gray-500">→</span>
                </div>
            </div>
        </>
    );
};

export default CommunitySearchPost;
