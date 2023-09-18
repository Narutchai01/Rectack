import React, { useState, useEffect } from "react";
import ArticlePost from "../ArticleFeedComponents/ArticlePost";
import ArticlePostInput from "../ArticleFeedComponents/ArticlePostInput";
import UsernameTemp from "../ArticleFeedComponents/UsernameTemp";

function ArticleFeed(props) {
  const initialPosts = [];
  const filter = props.filter;
  const createArticle = props.createArticle;

  const [posts, setPosts] = useState(initialPosts);
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('Username1');

  const addPostHandler = (newpost) => {
    setPosts((prevPosts) => {
      return [newpost, ...prevPosts];
    });
  }

  return (
    <>
      <div className={`bg-white bg-opacity-70 mt-10  h-full justify-center w-[90%] lg:w-[50%] fixed rounded-xl ${createArticle ? 'flex' : 'hidden'}`}>
          <ArticlePostInput addPost={addPostHandler} createArticle={createArticle} addTitle={setTitle} username={username}/>
      </div>
      <div className="mt-6 bg-white">
        <ArticlePost items={posts} title={title} filter={filter} currentUser={username}/>
      </div>
      <UsernameTemp changeUser={setUsername} />
    </>
  );
}

export default ArticleFeed;
