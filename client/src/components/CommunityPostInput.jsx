function CommunityPostInput() {
    return (
<>
    <form className="mx-auto w-full bg-white border border-gray-300 shadow-sm p-4 rounded-xl">
        <div className="mb-4">
            <label className="mx-2 block font-bold text-md text-gray-700 mb-2">What is your question today?</label>
            <input placeholder="Ask community..." className="block w-full pt-4 border-grey-500 border-b-2 shadow-sm sm:text-sm focus:border-grey-100 focus:border-0"></input>
        </div>
        <div className="flex justify-between">
            <div className="relative inline-block">
                <select className="block w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline">
                    <option>Dropdown 1</option>
                    <option>Option 1</option>
                </select>
            </div>
            <div className="relative inline-block ml-4">
                <select className="block w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline">
                    <option>Dropdown 2</option>
                    <option>Option 1</option>
                </select>
            </div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-12 rounded-lg">Post</button>
        </div>
    </form>
</>


    )
}

export default CommunityPostInput;