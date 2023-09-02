function CommunityPostInput() {
    return (
        <>
                <form className="mx-auto w-[50%] bg-white border border-gray-300 shadow-sm p-4 rounded-xl fixed">
                    <div className="mb-4">
                        <label className="mx-2 block font-bold text-md text-gray-700 mb-2">What is your question today?</label>
                        <input
                            placeholder="Ask community..."
                            className="block w-full py-4 border-grey-500 border-b-2 shadow-sm sm:text-sm focus:outline-none focus:ring-red-100 focus:border-red-500"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="relative inline-block">
                                <select className="block w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-gray-400 px-2 py-2 pr-6 rounded-xl text-xs font-thin shadow focus:outline-none text-center">
                                    <option>Dropdown 1</option>
                                    <option>Option 1</option>
                                </select>
                            </div>
                            <div className="ml-5 relative inline-block">
                                <select className="block w-full bg-white border border-gray-300 hover:border-gray-400 focus:border-gray-400 px-2 py-2 pr-6 rounded-xl text-xs font-thin shadow focus:outline-none text-center">
                                    <option>Dropdown 2</option>
                                    <option>Option 1</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <button className="bg-gradient-to-r from-orange-600 via-red-600 to-red-700 hover:bg-gradient-to-r hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-normal py-1 px-10 rounded-full">
                                Post
                            </button>
                        </div>
                    </div>
                </form>   
        </>
    )
}

export default CommunityPostInput;