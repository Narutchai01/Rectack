import React from 'react'
import { Form } from 'react-router-dom'
import ChatBar from '../components/Chatbot/Chatbar.jsx'

const Chatbot = () => {
    return (
        <>
            <div className='h-screen overflow-hidden'>
                <ChatBar/>     
            </div>
        </>
    )
}

export default Chatbot
