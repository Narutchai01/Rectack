import React from 'react';

const TrendingPost = () => {
    return (
        <>
            <div className="w-auto p-4 border border-gray-300 shadow-sm rounded-xl my-3">
                <h1 className="mx-2 mb-5 font-bold text-xl text-gray-700">Trending Posts</h1>
                <div className="mb-3">
                    <div className="mx-2 mb-4">
                        <div className="font-bold text-sm">How to create AI like ChatGPT?</div>
                        <div className='inline-block'>
                            <span className="text-xs font-light">username143</span>
                            <span className="text-xs font-light"> &#8226; 5,012 Liked </span>
                        </div>
                    </div>
                    <div className="mx-2 mb-4">
                        <div className="font-bold text-sm">How to create AI like ChatGPT?</div>
                        <div className='inline-block'>
                            <span className="text-xs font-light">username143</span>
                            <span className="text-xs font-light"> &#8226; 5,012 Liked </span>
                        </div>
                    </div>
                    <div className="mx-2 mb-4">
                        <div className="font-bold text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, fugit!</div>
                        <div className='inline-block'>
                            <span className="text-xs font-light">username143</span>
                            <span className="text-xs font-light"> &#8226; 5,012 Liked </span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <button className="bg-white border border-grey-700 shadow-sm text-grey-400 font-light text-sm px-6 py-1 rounded-full">Load more...</button>
                </div>
            </div>
        </>
    );
}

export default TrendingPost;
