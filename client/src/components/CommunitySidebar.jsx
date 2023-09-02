import CommunitySearchPost from "./CommunitySearchPost";
import LikedPost from "./LikedPost";
import TrendingPost from "./TrendingPost";

const CommunitySidebar = () => {
  return (
    <div className="fixed w-[25%]">
        <CommunitySearchPost />
        <TrendingPost/>
        <LikedPost/>
    </div>
  );
};

export default CommunitySidebar;
