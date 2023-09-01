import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="h-24 mx-auto px-4 w-[100%] shadow-md">
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
                <h1 className="w-full text-3xl font-bold text-[#CB160E]">Rectack</h1>
                <ul className="hidden md:flex">
                    <li className="p-4">STACK</li>
                    <li className="p-4">COMMUNITY</li>
                    <li className="p-4">ARTICLE</li>
                    <li className="p-4">CHATBOT</li>
                </ul>
                <div onClick={ handleNav } className='block md:hidden'>
                    { !nav ? <AiOutlineClose size={ 20 } /> : <AiOutlineMenu size={ 20 } /> }
                </div>
                <div className={ nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500' }>
                    <h1 className="w-full text-3xl font-bold text-[#CB160E] m-4">Rectack</h1>
                    <ul className='p-4'>
                        <li className="p-4 border-b border-gray-600">STACK</li>
                        <li className="p-4 border-b border-gray-600">COMMUNITY</li>
                        <li className="p-4 border-b border-gray-600">ARTICLE</li>
                        <li className="p-4">CHATBOT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar