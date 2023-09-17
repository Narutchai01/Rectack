import React from 'react'

const StackInformationPage = () => {
  return (
    <>
      <div className='container mx-auto my-[5%]'>
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
          <br /><br /><br />
          <h1 className='text-4xl font-bold text-[#231815] mb-2'>React</h1>
          <div className="w-full border-b border-[#8A8E99] my-7"></div>
          <p>React is a popular front-end library developed by Facebook. It's designed for building user interfaces and is known for its component-based architecture.React is chosen for its flexibility and reusability. It allows developers to create modular UI components and is particularly well-suited for building single-page applications (SPAs) and dynamic user interfaces.</p>
          <br /><br />
          <h1 className='text-4xl font-bold text-[#231815] mb-2'>Express.js</h1>
          <div className="w-full border-b border-[#8A8E99] my-7"></div>
          <p>Express.js is a minimal and flexible Node.js web application framework. It simplifies the development of server-side applications, offering features for routing, handling HTTP requests, and managing sessions.Express.js is used because it provides a streamlined way to create server-side components for web applications and APIs. It offers a lightweight, unopinionated framework that allows developers to structure their applications as they see fit.</p>
          <br /><br />
          <h1 className='text-4xl font-bold text-[#231815] mb-2'>Node.js</h1>
          <div className="w-full border-b border-[#8A8E99] my-7"></div>
          <p>Node.js is a server-side JavaScript runtime that allows developers to build scalable and high-performance applications. It excels in handling I/O-intensive tasks and is known for its non-blocking, event-driven architecture.Node.js is used for server-side development in the MEAN stack because it enables developers to use JavaScript on both the client and server sides of an application, ensuring consistency and facilitating real-time communication.</p>
          <br /><br />
          <h1 className='text-4xl font-bold text-[#231815] mb-2'>MongoDB</h1>
          <div className="w-full border-b border-[#8A8E99] my-7"></div>
          <p>MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It is designed to handle large volumes of unstructured or semi-structured data.MongoDB is chosen for its scalability, speed, and ease of use. It is particularly well-suited for applications that require handling a large amount of data and need to adapt to changing data structures.</p>
        </div>
      </div>
    </>
    
  )
}

export default StackInformationPage