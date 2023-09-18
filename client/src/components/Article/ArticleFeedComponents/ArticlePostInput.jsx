import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const dropdownStyle = "block w-24 appearance-none text-center bg-white border border-gray-300 hover:border-gray-400 focus:border-gray-400 px-2 sm:px-6 py-2 rounded-xl text-xs font-thin shadow focus:outline-none";
const boxStyle = "inline-block mx-2 py-2 px-2 w-auto bg-white border border-gray-300 hover:border-gray-400 focus:border-gray-400 text-gray-500 rounded-xl text-xs font-thin shadow focus:outline-none";
const smallScreenSize = window.innerWidth < 640 && 1023 < window.innerWidth < 1080;

function ArticlePostInput(props) {
    const [post, setPost] = useState('');
    const [title, setTitle] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const username = props.username;
    // const [username, setUsername] = useState('Username1');
    const [isSelected, setIsSelected] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(smallScreenSize);
    
    useEffect(() => {
        const updateIsSmallScreen = () => {
        setIsSmallScreen(smallScreenSize);
        };

        window.addEventListener('resize', updateIsSmallScreen);

        return () => {
        window.removeEventListener('resize', updateIsSmallScreen);
        };
    }, []);

    const checkSelected = () => {
        setIsSelected(true);
    }

    const inputPost = (event) => {
        setPost(event.target.value);
    }

    const saveItem = (event) => {
        event.preventDefault();
        
        if (!post.trim()) {
            alert('Please enter a post');
            return;
        }

        const itemData = { post: post, role: selectedRole, tags: selectedTags, username: username, postId: uuidv4() };
        props.addPost(itemData);
        setPost('');
        setSelectedRole('');
        setSelectedTags([]);
    }

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
        checkSelected();
    }


    const handleTagChange = (event) => {
        if (selectedTags.length === 2) {
        alert("You can only select 2 tags");
        return;
        }
        const selectedTag = event.target.value;
        if (!selectedTags.includes(selectedTag) && selectedTags.length < 2) {
        setSelectedTags([...selectedTags, selectedTag]);
        }
        checkSelected();
    }

    const handleTagChangeSmallSize = (event) => {
        setSelectedTags([event.target.value]);
        checkSelected();
    }

    const handleTagClick = (clickedTag) => {
        setSelectedTags(selectedTags.filter(tag => tag !== clickedTag));
        checkSelected();
    }

    const handleKeyDown = (event) => {
        if (event.shiftKey && event.key === 'Enter') {
            setPost((prevPost) => prevPost + '\n');
        }
    }

    const handleSubmit = () => {
        const lines = post.split('\n');

        setTitle(lines[0]);
        setPost(lines.slice(1).join('\n').replace(/\n/g, '<br />'));
    }

    useEffect(() => {
        props.addTitle(title);
    },[title]);

    return (
        <>
        <form className="mx-auto w-[90%] lg:w-[50%] mt-10 bg-white border border-gray-300 shadow-sm p-4 rounded-xl fixed" onSubmit={saveItem}>
            <div className="mb-4">
                <label className="mx-2 block font-bold text-md text-gray-700 sm:mb-2">What is your question today?</label>
                <textarea
                    rows="3"
                    placeholder="First Line is Title
Ask community..."
                    className="block pl-2 resize-none h-[50px] sm:h-[60px] w-full py-4 border-grey-500 border-b-2 shadow-sm sm:text-sm focus:outline-none focus:ring-red-100 focus:border-red-500"
                    onChange={inputPost}
                    value={post}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex justify-between items-center">
                <div className='ml-2 md:ml-4'>
                    <div className="relative inline-block">
                        <select
                            className={dropdownStyle}
                            onChange={handleRoleChange}
                        >
                            <option defaultValue="" disabled={isSelected}>Role</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile Development">Mobile Development</option>
                            <option value="Game Development">Game Development</option>
                            <option value="Data Analysis">Data Analysis</option>
                            <option value="Computer Vision">Computer Vision</option>
                            <option value="NLP">NLP</option>
                        </select>
                    </div>
                    <div className="ml-2 md:ml-5 relative inline-block">
                    <select
                        className={dropdownStyle}
                        onChange={isSmallScreen ? handleTagChangeSmallSize : handleTagChange}
                    >
                        <option defaultValue="" disabled={isSelected}>Tag</option>
                        <option value="MEAN">MEAN</option>
                        <option value="MEVN">MEVN</option>
                        <option value="MERN">MERN</option>
                    </select>
                </div>
            </div>

            <div className="hidden mx-2 sm:flex lg:hidden xl:flex justify-between">
                {selectedRole && (
                <span
                    className={boxStyle}
                    onClick={() => setSelectedRole('') }
                >{selectedRole}</span>
                )}
                {selectedTags.length > 0 && (
                <div className="flex">
                    {selectedTags.map((tag, index) => (
                    <span key={index}
                        className={boxStyle}
                        onClick={() => handleTagClick(tag)}
                    >{tag}</span>
                    ))}
                </div>
                )}
            </div>
            <div>
                <button className="bg-gradient-to-r from-orange-600 via-red-600 to-red-700 hover:bg-gradient-to-r hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-normal py-1 px-5 sm:px-10 rounded-full" onClick={handleSubmit}>
                Post
                </button>
            </div>
            </div>
        </form>
        </>
    )
}

export default ArticlePostInput;
