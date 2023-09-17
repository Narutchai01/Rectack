import React, { useState, useRef, useEffect } from 'react';
import PostActions from './PostActions';
import CommunityComment from './CommunityComment';

const CommunityPostItem = (props) => {
  const { title, post, role, tags, postId, username, currentUser } = props;
  const [likes, setLikes] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(false);
  const [likedUsers, setLikedUsers] = useState([]);
  const [userLikedPosts, setUserLikedPosts] = useState({});
  const [isReadMore, setIsReadMore] = useState(false);
  const [readComment, setReadComment] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const maxContentHeight = 65;

  console.log(currentUser);

  const contentRef = useRef(null);

  const handleToggleComment = () => {
    setReadComment(!readComment);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, [post]);

  const handleLike = () => {
    if (!likedUsers.includes(currentUser)) {
      setLikes(likes + 1);
      setIsLikedByCurrentUser(true);
      setLikedUsers([...likedUsers, currentUser]);

    } else {
      setLikes(likes - 1);
      setIsLikedByCurrentUser(false);
      setLikedUsers(likedUsers.filter((user) => user !== currentUser));
    }
  };

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div key={postId} className="mx-auto min-h-[50px] w-auto bg-white border border-gray-300 shadow-sm p-4 rounded-xl my-4">
      <div className="inline-flex items-center m-1">
        <div className="rounded-full w-10 h-10 border-2" />
        <div>
          <span className='mx-2'>{username}</span>
        </div>
      </div>
      <div className="ml-2 font-bold">
        {title}
      </div>
      <div className="overflow-hidden">
        <div className={`flex justify-between text-xs mx-2 text-gray-500 ${!isReadMore && contentHeight > maxContentHeight ? 'max-h-[64px]' : ''}`}>
          <div ref={contentRef} dangerouslySetInnerHTML={{ __html: post }}></div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        {contentHeight > maxContentHeight && (
          <button className='bg-white hover:bg-gray-100 border border-grey-700 shadow-sm text-grey-400 font-light text-xs px-4 py-1 rounded-full' onClick={handleReadMore}>
          {isReadMore ? "Hide" : "Read More"}
        </button>
        )}
        <div className="mt-3 w-[98%] border-[1px]"/>
      </div>
      <div className="w-[98%] mx-auto mt-2 flex justify-between items-center text-gray-500 mr-2">
        <PostActions
          onLike={handleLike}
          likes={likes}
          commentCount={commentCount}
          isLiked={isLikedByCurrentUser}
          onToggleComment={handleToggleComment}
        />
        <div className="hidden sm:flex justify-between mx-2">
          {role !== '' ?(
            <span className="inline-block mx-2 py-2 px-5 w-auto bg-white border border-gray-300 hover:border-gray-400 focus:border-gray-400 text-gray-500 rounded-xl text-xs font-thin shadow focus:outline-none">
            {role}
          </span>
          ): null}
          {tags.map((tag, index) => (
            <span key={index}>
              <span className="inline-block mx-2 py-2 px-5 w-auto bg-white border border-gray-300 hover:border-gray-400 focus:border-gray-400 text-gray-500 rounded-xl text-xs font-thin shadow focus:outline-none">
                {tag}
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className={`${readComment ? '' : 'hidden'}`}>
        <CommunityComment username={currentUser} plusCommentCount={setCommentCount}/>
      </div>
    </div>
  );
};

export default CommunityPostItem;
