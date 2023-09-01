import CommunityPost from "./CommunityPost";
import CommunityPostInput from "./CommunityPostInput";

function CommunityFeed(){
    return(
        <>
            <div className="w-full h-auto flex flex-col items-center justify-center">
                <CommunityPostInput/>
                <div className="w-full my-5 border-[1px]"></div>
                <CommunityPost/>
            </div>
        </>
    )
}

export default CommunityFeed;