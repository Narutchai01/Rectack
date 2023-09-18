import React, { useEffect, useState } from 'react';

const LikedPost = ({ data, username }) => {
    const [likedPosts, setLikedPosts] = useState([]);

    useEffect(() => {
        const filteredPosts = data.filter((post) => post.likedBy.includes(username));
        setLikedPosts(filteredPosts);
    }, [data, username]);

    return (
        <div className="w-auto p-4 border border-gray-300 shadow-sm rounded-xl my-3">
            <h2 className="font-bold ml-2 text-xl text-gray-700 mb-2">Your Liked</h2>

            <div className="pl-2 max-h-[60px] 2xl:max-h-[120px] overflow-y-auto text-gray-700 text-sm font-normal">
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
