import React, { useState } from 'react';
import CommunityFeed from '../components/CommunityMain/CommunityFeed.jsx';
import CommunitySidebar from '../components/CommunityMain/CommunitySidebar.jsx';

const CommuPage = () => {
  const [filter, setFilter] = useState('');
  const [username, setUsername] = useState('Username1');

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="hidden lg:block w-[25%] m-10">
          <CommunitySidebar searchPost={setFilter} username={username}/>
        </div>
        <div className="w-[90%] lg:w-[50%] flex flex-col">
            <CommunityFeed filter={filter} changeUser={setUsername}/>
        </div>
      </div>
    </>
  );
};

export default CommuPage;
