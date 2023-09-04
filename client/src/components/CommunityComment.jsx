import React, { useState } from 'react';

const CommunityComment = ({ username }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (newComment.trim() !== '') {
        setComments([...comments, newComment]);
        setNewComment('');
        }
    };

    return (
        <div className="mt-4">
        <h4 className="text-sm font-semibold mb-2">Comments:</h4>
        <ul className="list-none p-0">
            {comments.map((comment, index) => (
                
            <li key={index} className="mb-2 p-2 border rounded-lg bg-gray-100">
                {username}: {comment}
            </li>
            ))}
        </ul>
        <form onSubmit={handleCommentSubmit} className="mt-3">
            <textarea
                rows="2"
                className="w-full resize-none border rounded-md p-2 focus:ring focus:ring-blue-200"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <button
            type="submit"
            className="bg-gradient-to-r from-orange-600 via-red-600 to-red-700 hover:bg-gradient-to-r hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-normal py-2 px-5 rounded-full"
            >
            Comment
            </button>
        </form>
        </div>
    );
};

export default CommunityComment;
