import { useState } from 'react';

function CommunityPostInput(props) {
    const [post, setPost] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    const inputPost = (event) => {
        setPost(event.target.value);
    }

    const saveItem = (event) => {
        event.preventDefault();
        const itemData = { post: post, role: selectedRole, tags: selectedTags };
        props.addPost(itemData);
        setPost('');
        setSelectedRole('');
        setSelectedTags([]);
    }

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
        console.log(selectedRole);
    }

    const handleTagChange = (event) => {
        const selectedTag = event.target.value;
        if (!selectedTags.includes(selectedTag) && selectedTags.length < 2) {
            setSelectedTags([...selectedTags, selectedTag]);
        }
    }

    const handleTagClick = (clickedTag) => {
        setSelectedTags(selectedTags.filter(tag => tag !== clickedTag));
    }
    

    return (
        <>
            <form className="mx-auto w-[50%] mt-10 bg-white border border-gray-300 shadow-sm p-4 rounded-xl fixed" onSubmit={saveItem}>
                <div className="mb-4">
                    <label className="mx-2 block font-bold text-md text-gray-700 mb-2">What is your question today?</label>
                    <input
                        type='text'
                        placeholder="Ask community..."
                        className="block w-full py-4 border-grey-500 border-b-2 shadow-sm sm:text-sm focus:outline-none focus:ring-red-100 focus:border-red-500"
                        onChange={inputPost}
                        value={post}
                    />
                </div>
                <div className="flex justify-between items-center">
                    <div className='ml-4'>
                        <div className="relative inline-block">
                            <select
                                className="block appearance-none text-center bg-white border border-gray-300 hover:border-gray-400 focus:border-gray-400 px-6 py-2 rounded-xl text-xs font-thin shadow focus:outline-none"
                                onChange={handleRoleChange}
                            >
                                <option defaultValue="">Role</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select>
                        </div>
                        <div className="ml-5 relative inline-block">
                            <select
                                className="block appearance-none text-center bg-white border border-gray-300 hover:border-gray-400 focus:border-gray-400 px-6 py-2 rounded-xl text-xs font-thin shadow focus:outline-none"
                                onChange={handleTagChange}
                            >
                                <option defaultValue="">Tag</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                                <option value="Option 4">Option 4</option>
                            </select>
                        </div>
                    </div>

                    <div className="mx-2 flex justify-between">
                        {selectedRole && (
                            <span 
                                className="inline-block mx-2 py-2 px-5 w-auto bg-white border border-gray-300 hover:border-gray-400 focus:border-gray-400 text-gray-500 rounded-xl text-xs font-thin shadow focus:outline-none"
                                onClick={() => setSelectedRole('')}
                            >{selectedRole}</span>
                        )}
                        {selectedTags.length > 0 && (
                            <div className="flex">
                                {selectedTags.map((tag, index) => (
                                    <span key={index} 
                                        className="inline-block mx-2 py-2 px-5 w-auto bg-white border border-gray-300 hover:border-gray-400 focus:border-gray-400 text-gray-500 rounded-xl text-xs font-thin shadow focus:outline-none"
                                        onClick={() => handleTagClick(tag)}
                                    >{tag}</span>
                                ))}
                            </div>
                        )}
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
