import React, { useState } from 'react';
import ArticleFeed from '../components/Article/ArticleMain/ArticleFeed.jsx';
import ArticleSidebar from '../components/Article/ArticleMain/ArticleSidebar.jsx';

const ArticlePage = () => {
    const [createArticle, setCreateArticle] = useState(false);
    const [username, setUsername] = useState('Username1');

    return (
        <>
        <div className="flex justify-center h-screen">
            <div className="hidden lg:block w-[25%] m-10">
                <ArticleSidebar createArticle={setCreateArticle} username={username}/>
            </div>
            <div className="w-[90%] lg:w-[50%] flex flex-col">
                <ArticleFeed createArticle={createArticle} changeUser={setUsername}/>
            </div>
        </div>
        </>
    );
};

export default ArticlePage;
