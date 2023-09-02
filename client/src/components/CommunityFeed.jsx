import CommunityPost from "./CommunityPost";
import CommunityPostInput from "./CommunityPostInput";

function CommunityFeed() {
  return (
    <>
      <div className="h-[24%] w-full">
        <CommunityPostInput />
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <div className="w-full my-5">
            <div className="fixed border-[1px] w-[50%]"></div>
        </div>
        <div className="h-[60%] overflow-y-auto">
          <CommunityPost />
        </div>
      </div>
    </>
  );
}

export default CommunityFeed;
