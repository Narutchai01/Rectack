import React, { useState } from 'react';

const LikedPost = ({ data }) => {
    const [selectedUser, setSelectedUser] = useState('');
    const [likedPosts, setLikedPosts] = useState([]);

    const updateLikedPosts = (user) => {
        const filteredPosts = data.filter((post) => post.likedBy.includes(user));
        setLikedPosts(filteredPosts);
    };

    return (
        <div className="w-auto p-4 border border-gray-300 shadow-sm rounded-xl my-3">
            <h2 className="font-bold ml-2 text-xl text-gray-700 mb-2">Your Liked</h2>

            <div className="mb-4">
                <label htmlFor="selectUser" className="font-bold text-gray-700">
                    Select a User:
                </label>
                <select
                id="selectUser"
                className="ml-2 border border-gray-300 rounded-md"
                value={selectedUser}
                onChange={(e) => {
                    setSelectedUser(e.target.value);
                    updateLikedPosts(e.target.value);
                }}
                >
                <option value="" disabled>Select a user</option>
                {data.map((post) => (
                    <option key={post.username} value={post.username}>
                    {post.username}
                    </option>
                ))}
                </select>
            </div>

            {/* <div className="mb-3 max-h-[240px] overflow-y-auto">
                
            </div> */}

            <div className="pl-2 max-h-[60px] overflow-y-auto text-gray-700 text-sm font-normal">
                <ul>
                {likedPosts.map((post, index) => (
                    <li key={index}>
                    <div className="font-bold text-sm">{post.post}</div>
                    <div className='pb-2 inline-block'>
                        <span className="text-xs font-light">{post.username}</span>
                        <span className=" text-xs font-light"> &#8226; {post.likedBy.length} </span>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default LikedPost;
