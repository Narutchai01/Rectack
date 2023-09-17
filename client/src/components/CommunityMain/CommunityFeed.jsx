import React, { useState, useEffect } from "react";
import CommunityPost from "../CommunityFeedComponents/CommunityPost";
import CommunityPostInput from "../CommunityFeedComponents/CommunityPostInput";

function CommunityFeed(props) {
  const initialPosts = [];
  const filter = props.filter;

  const [posts, setPosts] = useState(initialPosts);
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('Username1');

  useEffect(() => {
    props.changeUser(username);
}, [username, props]);


  const addPostHandler = (newpost) => {
    setPosts((prevPosts) => {
      return [newpost, ...prevPosts];
    });
  }

  return (
    <>
      <div className="h-[33vh] max-h-58 bg-white">
        <div className="bg-white h-[33vh] max-h-58 w-[90%] lg:w-[50%] fixed">
          <CommunityPostInput addPost={addPostHandler} addTitle={setTitle} changeUser={setUsername}/>
        </div>
      </div>
      <div className="h-[60vh] bg-white">
        <div className="fixed border-[1px] w-[90%] lg:w-[50%]"></div>
        <CommunityPost items={posts} title={title} filter={filter} currentUser={username}/>
      </div>
    </>
  );
}

export default CommunityFeed;
