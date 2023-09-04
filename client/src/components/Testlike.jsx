import React, { useState } from 'react';

const initialPosts = [
  { id: 1, text: 'Post 1', likes: 0, likedBy: [] },
  { id: 2, text: 'Post 2', likes: 0, likedBy: [] },
  { id: 3, text: 'Post 3', likes: 0, likedBy: [] },
];

const initialUsers = ['User 1', 'User 2', 'User 3'];

const App = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedUser, setSelectedUser] = useState(initialUsers[0]);

  const handleLikeToggle = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.likedBy.includes(selectedUser)
                ? post.likes - 1
                : post.likes + 1,
              likedBy: post.likedBy.includes(selectedUser)
                ? post.likedBy.filter((likedUser) => likedUser !== selectedUser)
                : [...post.likedBy, selectedUser],
            }
          : post
      )
    );
  };

  const getUserLikedPosts = (user) => {
    return posts
      .filter((post) => post.likedBy.includes(user))
      .map((post) => post.text);
  };

  return (
    <div>
      <h1>Like App</h1>
      <label>Select User:</label>
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        {initialUsers.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.text} - Likes: {post.likes}
            <button onClick={() => handleLikeToggle(post.id)}>
              {post.likedBy.includes(selectedUser) ? 'Unlike' : 'Like'} as{' '}
              {selectedUser}
            </button>
          </li>
        ))}
      </ul>
      <h2>{selectedUser}'s Liked Posts:</h2>
      <ul>
        {getUserLikedPosts(selectedUser).map((likedPost, index) => (
          <li key={index}>{likedPost}</li>
        ))}
      </ul>
      <style>
        {`
          .liked {
            background-color: green;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default App;
