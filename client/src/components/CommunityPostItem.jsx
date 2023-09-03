import React, { useState } from 'react';
import PostActions from './PostActions';

const CommunityPostItem = (props) => {
    const { post, role, tags, username } = props;
    const [likes, setLikes] = useState(0);
    const [commentCount, setCommentCount] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    }

    const handleComment = () => {
        setCommentCount(commentCount + 1);
    }

    return (
        <div className="mx-auto min-h-[50px] w-auto bg-white border border-gray-300 shadow-sm p-4 rounded-xl my-4">
            <div className="inline-flex items-center m-1">
                <div className="rounded-full w-10 h-10 border-2" />
                <div>
                    <h2 className="mx-2 font-medium mb-2">{username}</h2>
                </div>
            </div>
            <div className="ml-2 font-bold">
                Lorem ipsum dolor sit amet.
            </div>
            <div className="flex justify-between text-xs mx-2 text-gray-500">
                {post}
            </div>
            <div className="mt-5 w-[98%] border-[1px]"></div>
            <div className="w-[98%] mx-auto mt-2 flex justify-between items-center text-gray-500 mr-2">
                <PostActions onLike={handleLike} onComment={handleComment} likes={likes} commentCount={commentCount} />
                <div className="flex justify-between mx-2">
                    <span className="inline-block mx-2 py-2 px-5 w-auto bg-white border border-gray-300 hover:border-gray-400 focus:border-gray-400 text-gray-500 rounded-xl text-xs font-thin shadow focus:outline-none">
                        {role}
                    </span>
                    {tags.map((tag, index) => (
                        <span key={index}>
                            <span className="inline-block mx-2 py-2 px-5 w-auto bg-white border border-gray-300 hover:border-gray-400 focus:border-gray-400 text-gray-500 rounded-xl text-xs font-thin shadow focus:outline-none">
                                {tag}
                            </span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CommunityPostItem;
