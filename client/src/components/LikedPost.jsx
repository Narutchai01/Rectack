const LikedPost = () => {
    return(
        <>
            <div className="w-auto p-4 border border-gray-300 shadow-sm rounded-xl my-3">
                <h2 className="font-bold ml-2 text-xl text-gray-700 mb-2">Your Liked</h2>
                <div className="text-center m-4 text-gray-700 text-sm font-normal"> 10,000 Liked </div>
                {/* <ul className="mt-4 mx-2 list-none list-inside text-sm">
                    <li>Liked Post 1</li>
                    <li>Liked Post 2</li>
                    <li>Liked Post 3</li>
                </ul> */}
            </div>
        </>
    )
}

export default LikedPost;