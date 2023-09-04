import CommunitySearchPost from "./CommunitySearchPost";
import LikedPost from "./LikedPost";
import TrendingPost from "./TrendingPost";

  const data = [
    { username: 'username1', post: 'post2', like: 0, likedBy: ['username1'] },
    { username: 'username2', post: 'post3', like: 0, likedBy: ['username1', 'username2'] },
    { username: 'username3', post: 'post4', like: 0, likedBy: ['username1', 'username3' , 'username2']},
    { username: 'username4', post: 'post5', like: 0, likedBy: ['username1', 'username3' , 'username2', 'username4']},
    { username: 'username5', post: 'post6', like: 0, likedBy: ['username1', 'username3' , 'username2', 'username4', 'username5']},
    { username: 'username6', post: 'post7', like: 0, likedBy: ['username1', 'username3' , 'username2', 'username4', 'username5', 'username6']},
    { username: 'username7', post: 'post8', like: 0, likedBy: ['username1', 'username3' , 'username2', 'username4', 'username5', 'username6', 'username7']},
    { username: 'username8', post: 'post9', like: 0, likedBy: ['username1', 'username3' , 'username2', 'username4', 'username5', 'username6', 'username7', 'username8']},
  ];

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
        <LikedPost data={data}/>
    </div>
  );
};

export default CommunitySidebar;