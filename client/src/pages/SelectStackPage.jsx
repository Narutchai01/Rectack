import React from 'react'
import { useState } from 'react'
import StackSection from '../components/StackSection'

const SelectStackPage = () => {
  const RoleList = [
    {id : 1, title : "Web Development"},
    {id : 2, title : "Mobile Development"},
    {id : 3, title : "Game Development"},
    {id : 4, title : "Data Analysis"},
    {id : 5, title : "Computer Vision"},
    {id : 6, title : "NLP"}
  ]

  const [items, setItem] = useState(RoleList)

  return (
    <div className='container mx-auto mt-[100px]'>
        <div className=''>
          <h1 className='text-4xl font-bold text-[#231815] mb-2'>Web Development</h1>
          <p className='text-[#8A8E99] text-2xl mb-4'>Let’s find and learn the right tools for your project!</p>
          <form action="/">
            <button type='submit' className='w-[200px] py-2 rounded-lg bg-white border-solid border border-[#8A8E99] text-[#231815] hover:bg-gradient-to-br from-[#CB160E] to-[#EA5B37] hover:text-white hover:border-hidden hover:my-[1px]'>Back to all roles</button>
          </form>
          <div className="w-full border-b border-[#8A8E99] my-7"></div>
          <div className='flex text-center flex-col justify-center items-center'>
            <h1 className="text-[#231815] font-bold text-4xl mb-7 mt-7">Select the Stack</h1>
            <StackSection items = { items } />
          </div>
        </div>
    </div>
  )
}

export default SelectStackPage