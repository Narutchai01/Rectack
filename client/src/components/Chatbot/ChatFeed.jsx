import React from 'react';

const ChatFeed = (props) => {
    const { messages } = props;

    const answers = [
        "Hello!sdlkamdkakkajasdasddsfl;j;aldkjfl;asdadasdla/sdk;aksd;askd'fk'a;ldkf';akdf;akds';fka;'kdf;kasd'f;lak;ljasd;ljf;lakdsjfl;j;lasdfadfafadf",
        "How can I help you? <br/> sdlkamdkakkajasdasddsfl;j;aldkjfl;asdadasdla/sdk;aksd;askd'fk'a;ldkf';akdf;akds';fka;'kdf;kasd'f;lak;ljasd;ljf;lakdsjfl;j;lasdfadfafadf",
        "I'm here to assist you.sdlkamdkakkajasdasddsfl;j;aldkjfl;asdadasdla/sdk;aksd;askd'fk'a;ldkf';akdf;akds';fka;'kdf;kasd'f;lak;ljasd;ljf;lakdsjfl;j;lasdfadfafadf",
        "What's on your mind?sdlkamdkakkajasdasddsfl;j;aldkjfl;asdadasdla/sdk;aksd;askd'fk'a;ldkf';akdf;akds';fka;'kdf;kasd'f;lak;ljasd;ljf;lakdsjfl;j;lasdfadfafadf",
        "Ask me anything!sdlkamdkakkajasdasddsfl;j;aldkjfl;asdadasdla/sdk;aksd;askd'fk'a;ldkf';akdf;akds';fka;'kdf;kasd'f;lak;ljasd;ljf;lakdsjfl;j;lasdfadfafadf",
    ];

    return (
        <div className="pb-[15%] pt-10 mx-10 overflow-hidden">
            <ul className="list-none">
                {messages.map((message, index) => (
                    <li key={index} className='my-2'>
                        <div className="my-4 flex items-center justify-end">
                            <span className="inline-block max-w-[50%] p-2 mx-2 rounded-lg bg-[#EA5B37] text-white break-all">
                                <span dangerouslySetInnerHTML={{ __html: message}}/>
                            </span>
                            <span className='h-10 w-10 border-2 rounded-full'></span>
                        </div>
                        <div className='my-4 flex items-center justify-start'>
                            <span className='h-10 w-10 border-2 rounded-full'></span>
                            <span className="inline-block max-w-[50%] p-2 mx-2 rounded-lg border break-all"
                                dangerouslySetInnerHTML={{ __html: answers[Math.floor(Math.random() * answers.length)]}}
                            >
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatFeed;
