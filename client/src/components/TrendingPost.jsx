import React from 'react';

const TrendingPost = (props) => {
  const { items } = props;
  const [displayCount, setDisplayCount] = React.useState(3);
  const [isLoadMore, setIsLoadMore] = React.useState(false);

  const handleLoadMore = () => {
    if (isLoadMore) {
      setDisplayCount(3);
      setIsLoadMore(false);   
    } else {
      setDisplayCount(items.length);
      setIsLoadMore(true);
    }
  }


  return (
    <>
      <div className="w-auto p-4 border border-gray-300 shadow-sm rounded-xl my-3">
        <h1 className="mx-2 mb-5 font-bold text-xl text-gray-700">Trending Posts</h1>
        <div className="mb-3 max-h-[240px] overflow-y-auto">
          {items.slice(0,displayCount).map((item, index) => (
            <div key={index} className="mx-2 mb-4">
              <div className="font-bold text-sm">{item.title}</div>
              <div className='inline-block'>
                <span className="text-xs font-light">{item.username}</span>
                <span className="text-xs font-light"> &#8226; 5,012 Liked </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button 
            className="bg-white border border-grey-700 shadow-sm text-grey-400 font-light text-sm px-6 py-1 rounded-full"
            onClick={handleLoadMore}  
          >
            {isLoadMore ? "Hide" : "Load More"}
          </button>
        </div>
      </div>
    </>
  );
}

export default TrendingPost;
