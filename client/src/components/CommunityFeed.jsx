import React, { useState } from "react";
import CommunityPost from "./CommunityPost";
import CommunityPostInput from "./CommunityPostInput";

function CommunityFeed() {
  const initialPosts = [];

  const [posts, setPosts] = useState(initialPosts);
  const addPostHandler = (newpost) => {
    setPosts((prevPosts) => {
      return [newpost, ...prevPosts];
    });
  }
  return (
    <>
      <div className="h-[33vh] max-h-58 bg-white">
        <div className="bg-white h-[33vh] max-h-58 w-[50%] fixed">
          <CommunityPostInput addPost={addPostHandler} />
        </div>
      </div>
      <div className="h-[60vh] bg-white">
        <div className="fixed border-[1px] w-[50%]"></div>
        <CommunityPost items={posts}/>
      </div>
    </>
  );
}

export default CommunityFeed;
