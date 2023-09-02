import React from 'react';
import CommunityFeed from '../components/CommunityFeed';
import CommunitySidebar from '../components/CommunitySidebar';

const CommuPage = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[25%] m-10">
            <CommunitySidebar/>
        </div>
        <div className="w-[50%] mt-10">
          <CommunityFeed />
        </div>
      </div>
    </>
  );
};

export default CommuPage;
