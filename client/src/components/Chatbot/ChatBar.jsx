import React, { useState } from 'react';
import IconArrowRightCircle from '../../assets/IconArrowRightCircle.jsx';
import ChatFeed from './ChatFeed.jsx';

const ChatBar = (props) => {
    const [inputText, setInputText] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = () => {
        // Perform the same action as pressing Enter
        handleKeyPress({ key: 'Enter' });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        setInputText('');
        setSubmitted(true);
        setChatMessages([...chatMessages, inputText.replace(/\n/g, '<br/>')]);
        }
    };

    return (
        <> 
            <div className={`justify-center overflow-scroll ${submitted ? 'flex h-full' : 'hidden'}`}>
                <div className='w-[60%] '>
                    <ChatFeed messages={chatMessages}/>
                </div>
            </div>
            <div className="flex justify-center items-center h-screen">
                <div className={`${submitted ? 'hidden' : 'h-[50%]'}`}>
                    <div className='text-3xl font-semibold text-center'> Ask me your stack question</div>
                    <div className='text-gray-400 text-xl mt-1 text-center'> <span className='text-[#EA5B37]'>All tools</span> in one place | <span className='text-[#EA5B37]'>All knowledge</span> in one click </div>
                </div>
                <div className='fixed bottom-0 bg-white h-[20vh] w-full'/>
                <div className={`fixed w-1/2 h-20 ${submitted ? 'bottom-10' : ''}`}>
                    <textarea
                        className="w-full h-20 pl-4 pr-16 py-6 border border-gray-400 focus:outline-none focus:ring-1 focus:border-red-400 focus:ring-red-300 rounded-lg resize-none mr-2"
                        placeholder="Ask anything..."
                        value={inputText}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                    ></textarea>
                    <button
                        className="absolute hover:text-red-300 focus:outline-none right-4 top-[30%] text-gray-400 p-2 rounded-full"
                    >
                        <IconArrowRightCircle height={20} width={20} />
                    </button>
                </div>
            </div>
        </>
        
    );
};

export default ChatBar;