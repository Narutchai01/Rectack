import React from 'react'
import { useState } from 'react'
import StackSection from '../components/StackSection'

const SelectStackPage = () => {
  const RoleList = [
    {id : 1, title : "MEAN", describe : "MEAN stands for MongoDB, Express.js, Angular, and Node.js. It is a full-stack JavaScript framework that offers a comprehensive solution for building modern web applications.The MEAN stack is an excellent choice for developers who prefer a full-stack JavaScript environment. It offers a consistent language (JavaScript) across the entire application, which can streamline development and foster code reuse. MEAN is particularly suitable for projects that require real-time data handling, scalability, and adaptability to changing data structures.To get started with MEAN, you need to set up each component individually. MongoDB for data storage, Express.js for server-side logic, Angular for the front-end, and Node.js to bring it all together. The stack's flexibility allows you to structure your application according to your specific project requirements. Angular's robust CLI and extensive documentation make it easier to build complex user interfaces."},
    {id : 2, title : "MEVN", describe : "MEVN stands for MongoDB, Express.js, Vue.js, and Node.js. Similar to MERN, it offers a full-stack JavaScript solution but utilizes Vue.js as the front-end framework.MEVN is an appealing choice for developers who value the simplicity and ease of Vue.js while still enjoying the advantages of a full-stack JavaScript environment. Vue's incremental adoptability allows you to integrate it seamlessly into existing projects.Configuring the MEVN stack entails the same components as MEAN and MERN. Vue.js offers a highly interactive and reactive user interface. Its Vue CLI simplifies project setup and development. This stack's flexibility, combined with Vue.js's simplicity, makes it an attractive option for building web applications."},
    {id : 3, title : "MERN", describe : "MERN stands for MongoDB, Express.js, React, and Node.js. Like MEAN, it provides a full-stack JavaScript solution, but it employs React as the front-end framework.MERN is the preferred stack when you desire the power of JavaScript on both the server and client sides of your application. React's component-based architecture and virtual DOM make it a strong contender for building single-page applications and dynamic interfaces. It's renowned for its high performance and developer-friendly features.To create a MERN stack application, configure MongoDB for data storage, use Express.js for server-side logic, employ React for the front end, and Node.js to manage server operations. React's robust community and ecosystem provide a wealth of resources and third-party libraries to enhance functionality. Combining these technologies enables the development of lightning-fast, interactive web applications."}
  ]

  const [items, setItem] = useState(RoleList)

  return (
    <div className='container mx-auto my-[5%]'>
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