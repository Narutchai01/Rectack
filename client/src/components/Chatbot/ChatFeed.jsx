import React from 'react';

const ChatFeed = (props) => {
    const { messages } = props;

    const answers = [
        "Hello!",
        "How can I help you?",
        "I'm here to assist you.",
        "What's on your mind?",
        "Ask me anything!",
    ];

    return (
        <div className="mx-10 mt-10 overflow-hidden">
            <ul className="list-none pr-[15px] mr-[-15px] overflow-y-scroll max-h-[500px]">
                {messages.map((message, index) => (
                    <li key={index} className='my-2'>
                        <div className="flex items-center justify-end">
                            <span className="inline-block p-2 mx-2 rounded-lg bg-[#EA5B37] text-white">
                                {message}
                            </span>
                            <span className='h-10 w-10 border-2 rounded-full'></span>
                        </div>
                        <div className='my-2 flex items-center justify-start'>
                            <span className='h-10 w-10 border-2 rounded-full'></span>
                            <span className="inline-block p-2 mx-2 rounded-lg border">
                                {answers[Math.floor(Math.random() * answers.length)]}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatFeed;
