import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const StackItem = (props) => {
    const { title } = props

    return (
        <div>
            <Link to='/information'>
                <div className="bg-white border-solid border border-[#8A8E99] text-[#231815] w-[600px] rounded-lg text-left hover:bg-gradient-to-br from-[#CB160E] to-[#EA5B37] hover:text-white hover:border-hidden">
                    <h1 className="p-4">{ title }</h1>
                    <div className="w-full border-b border-[#8A8E99]"></div>
                    <p className='p-4'>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod temor incididunt ut.</p>
                </div>
            </Link>
        </div>
    )
}

export default StackItem