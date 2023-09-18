import React, { useState,useEffect } from 'react';

const CreateArticle = (props) => {
    const [createArticle, setCreateArticle] = useState(false);

    useEffect(() => {
        props.createArticle(createArticle);
    }, [createArticle]);

    return (
        <div className='w-auto h-10 bg-gradient-to-r from-orange-600 via-red-600 to-red-700 hover:bg-gradient-to-r hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-normal py-1 px-5 sm:px-10 rounded-lg text-center flex items-center justify-center cursor-pointer'  
            onClick={() => setCreateArticle(!createArticle)}
        >
            {createArticle ? 'Close' : 'Create Article'}
        </div>
    );
};

export default CreateArticle;
