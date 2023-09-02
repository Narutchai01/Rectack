import CommunityPost from "./CommunityPost";
import CommunityPostInput from "./CommunityPostInput";
import { useState } from "react";

function CommunityFeed() {
  const initialPosts = []

  const [posts, setPosts] = useState(initialPosts);
  const addPostHandler = (newpost) => {
    setPosts((prevPosts) => {
      return [newpost, ...prevPosts];
    });
  }

  return (
    <>
      <div className="w-full">
        <CommunityPostInput addPost={addPostHandler}/>
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <div className="w-full overflow-y-auto">
          <div className="mb-[20%]"/>
          <div className="fixed border-[1px] w-[50%] mt-10"></div>
          <CommunityPost items = {posts}/>
        </div>
      </div>
    </>
  );
}

export default CommunityFeed;
