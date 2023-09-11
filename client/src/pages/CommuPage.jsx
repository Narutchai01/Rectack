import React from 'react';
import CommunityFeed from '../components/CommunityMain/CommunityFeed.jsx';
import CommunitySidebar from '../components/CommunityMain/CommunitySidebar.jsx';

const CommuPage = () => {
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="hidden lg:block w-[25%] m-10">
          <CommunitySidebar />
        </div>
        <div className="w-[90%] lg:w-[50%] flex flex-col">
            <CommunityFeed/>
        </div>
      </div>
    </>
  );
};

export default CommuPage;
