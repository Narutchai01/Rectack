import React from 'react'

const StackInformationPage = () => {
  return (
    <div className='container mx-auto mt-[100px]'>
        <div className=''>
            <h1 className='text-4xl font-bold text-[#231815] mb-2'>MERN Stack</h1>
            <p className='text-[#8A8E99] text-2xl mb-4'>Web Development</p>
            <form action="/stack">
              <button type='submit' className='w-[200px] py-2 rounded-lg bg-white border-solid border border-[#8A8E99] text-[#231815] hover:bg-gradient-to-br from-[#CB160E] to-[#EA5B37] hover:text-white hover:border-hidden hover:my-[1px]'>Back to all stacks</button>
            </form>
            <div className="w-full border-b border-[#8A8E99] my-7"></div>
            <p>
                MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular frontend framework is replaced with React JS. The main benefit of using MERN is the integration of React and its powerful library and capability to use code simultaneously on servers and browsers. Additionally, it has phenomenal full-stack development (front-end and backend) possibilities. Besides, React utilizes JavaScript XML and Virtual DOM, and these components work and implement changes seamlessly.
            </p>
        </div>
    </div>
  )
}

export default StackInformationPage