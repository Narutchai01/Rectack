import React from 'react' 
import CommunityFeed from '../components/CommunityFeed'
import CommunitySidebar from '../components/CommunitySidebar'

const CommuPage = () => {
    return (
        <>
            <div className="flex">
                <div className="w-[20%] m-10 border-2 border-black"><CommunitySidebar /></div>
                <div className="w-[40%]"><CommunityFeed /></div>
            </div>
        </>
    )
}

export default CommuPage;
