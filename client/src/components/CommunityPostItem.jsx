import React, { useState } from 'react';
import PostActions from './PostActions';
import CommunityComment from './CommunityComment';

const CommunityPostItem = (props) => {
  const { title, post, role, tags, postId, username } = props;
  const [likes, setLikes] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [isLikedByCurrentUser, setIsLikedByCurrentUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState('username1');
  const [likedUsers, setLikedUsers] = useState([]);
  const [userLikedPosts, setUserLikedPosts] = useState({});

  const usernames = ['username1', 'username2', 'username3'];

  const handleLike = () => {
    if (!likedUsers.includes(selectedUser)) {
      setLikes(likes + 1);
      setIsLikedByCurrentUser(true);
      setLikedUsers([...likedUsers, selectedUser]);

      setUserLikedPosts((prevLikedPosts) => ({
        ...prevLikedPosts,
        [selectedUser]: (prevLikedPosts[selectedUser] || []).concat(post),
      }));
    } else {
      setLikes(likes - 1);
      setIsLikedByCurrentUser(false);
      setLikedUsers(likedUsers.filter((user) => user !== selectedUser));

      setUserLikedPosts((prevLikedPosts) => ({
        ...prevLikedPosts,
        [selectedUser]: (prevLikedPosts[selectedUser] || []).filter(
          (likedPost) => likedPost !== post
        ),
      }));
    }
  };

  const handleComment = () => {
    setCommentCount(commentCount + 1);
  };

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
    setIsLikedByCurrentUser(
      likedUsers.includes(event.target.value) &&
        userLikedPosts[event.target.value]?.includes(post)
    );
  };

  return (
    <div key={postId} className="mx-auto min-h-[50px] w-auto bg-white border border-gray-300 shadow-sm p-4 rounded-xl my-4">
      <div className="inline-flex items-center m-1">
        <div className="rounded-full w-10 h-10 border-2" />
        <div>
          <span className='mx-2'>{username}</span>
          <select
            id="userSelect"
            value={selectedUser}
            onChange={handleUserChange}
          >
            {usernames.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="ml-2 font-bold">
        {title}
      </div>
      <div className="flex justify-between text-xs mx-2 text-gray-500">
        {post}
      </div>
      <div className="mt-5 w-[98%] border-[1px]"></div>
      <div className="w-[98%] mx-auto mt-2 flex justify-between items-center text-gray-500 mr-2">
        <PostActions
          onLike={handleLike}
          onComment={handleComment}
          likes={likes}
          commentCount={commentCount}
          isLiked={isLikedByCurrentUser}
        />
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
      {userLikedPosts[selectedUser]?.includes(post) && (
        <div className="text-xs text-gray-600 mt-2">
          {selectedUser} liked this post
        </div>
      )}
      <CommunityComment username={selectedUser}/>
    </div>
  );
};

export default CommunityPostItem;
