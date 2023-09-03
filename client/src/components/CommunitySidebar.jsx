import CommunitySearchPost from "./CommunitySearchPost";
import LikedPost from "./LikedPost";
import TrendingPost from "./TrendingPost";

const CommunitySidebar = (props) => {
  const trendingPosts = [
    {title: "Trending Post 1", username: "User1"},
    {title: "Trending Post 2", username: "User2"},
    {title: "Trending Post 3", username: "User3"},
    {title: "Trending Post 4", username: "User4"},
    {title: "Trending Post 5", username: "User5"},
    {title: "Trending Post 6", username: "User6"},
    {title: "Trending Post 7", username: "User7"},
    {title: "Trending Post 8", username: "User8"},
    {title: "Trending Post 9", username: "User9"},
    {title: "Trending Post 10", username: "User10"},
    {title: "Trending Post 11", username: "User11"},]
  return (
    <div className="fixed w-[25%]">
        <CommunitySearchPost />
        <TrendingPost items={trendingPosts}/>
        <LikedPost/>
    </div>
  );
};

export default CommunitySidebar;