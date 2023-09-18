import React, { useState } from 'react';

const ArticleComment = ({ username, plusCommentCount }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (newComment.trim() !== '') {
            const commentTextWithNewLines = newComment.replace(/\n/g, '<br />');
            const commentObject = {
                text: commentTextWithNewLines,
                postedBy: username,
            };
            setComments([...comments, commentObject]);
            setNewComment('');
            plusCommentCount((prevCount) => prevCount + 1);
        }
    };

    return (
        <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Comments:</h4>
            <ul className="list-none p-0">
                {comments.map((comment, index) => (
                    <div key={index} className={`mb-2 flex ${comment.postedBy === username ? 'justify-end' : 'justify-start'}`}>
                        <li  className={`mx-2 inline-block p-2 rounded-lg ${comment.postedBy === username ? 'bg-[#EA5B37] text-white' : 'bg-gray-100'}`}>
                            <span className='pr-2'> {comment.postedBy} :</span>
                            <span dangerouslySetInnerHTML={{ __html: comment.text }}/>
                        </li>
                    </div>
                ))}
            </ul>
            <form onSubmit={handleCommentSubmit} className="mt-3">
                <textarea
                    rows="2"
                    className="w-full h-[50px] sm:h-[65px] resize-none border focus:outline-none focus:border-red-500 rounded-md p-2 focus:ring focus:ring-red-100"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <div className='flex justify-between mt-2'>
                    <div/>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-orange-600 via-red-600 to-red-700 hover:bg-gradient-to-r hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-normal py-2 px-5 text-xs sm:text-base rounded-full"
                    >
                        Comment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ArticleComment;
