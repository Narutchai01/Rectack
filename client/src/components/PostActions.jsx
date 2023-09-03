import React from 'react';

const PostActions = ({ onLike, onComment, likes, commentCount }) => {
    return (
        <div className="flex">
            <div className="flex items-center">
                <button
                    className="w-5 h-5 bg-center bg-like-icon bg-no-repeat bg-16"
                    onClick={onLike}
                ></button>
                <span className="ml-1"> {likes} </span>
            </div>
            <div className="ml-6 flex items-center">
                <button
                    className="w-5 h-5 bg-center bg-comment-icon bg-no-repeat bg-16"
                    onClick={onComment}
                ></button>
                <span className="ml-1"> {commentCount} </span>
            </div>
        </div>
    );
};

export default PostActions;
