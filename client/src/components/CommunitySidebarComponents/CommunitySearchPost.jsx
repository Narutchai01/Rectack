import React, { useState } from 'react';

const CommunitySearchPost = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        props.searchPost(searchTerm);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <>
        <div className="w-auto p-6 border border-gray-300 shadow-sm rounded-xl mb-3">
            <h2 className="ml-2 font-bold text-md text-gray-700 mb-2">Search Post</h2>
            <div className="relative">
            <input
                type="text"
                placeholder=""
                className="w-full px-5 py-2 border rounded-lg focus:outline-none focus:border-red-400 pl-10 text-sm"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
            <span className="absolute right-4 top-2 text-gray-500 text-xs cursor-pointer" onClick={handleSearch}>
                →
            </span>
            <span className='absolute left-2 w-[10%] h-full bg-center bg-search-icon bg-no-repeat bg-16'></span>
            </div>
        </div>
        </>
    );
    };

export default CommunitySearchPost;
