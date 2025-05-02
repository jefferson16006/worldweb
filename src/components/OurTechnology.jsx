import React from 'react'

const OurTechnology = () => {
  return (
    <div className='-mx-5 bg-gray-800 p-5'>
      <div className='mt-15 bg-rose-900/40 py-0.5 font text-center rounded-lg w-34'>
        Our Technology
      </div>
      <h1 className='mt-3 font-bold text-5xl'>
        Powered by Advanced Language Models
      </h1>
      <p className='mt-6 text-[#d3d3d3] text-xl'>
        Our reverse dictionary leverages state-of-the-art natural language <br />
        processing and machine learning to understand the nuances of <br />
        language and deliver accurate results.
      </p>
      <ul className='mb-15'>
        <li className='flex items-center mt-5 text-[#d3d3d3] text-lg'>
            <div className="mr-3 h-1.5 w-1.5 rounded-full bg-[#8707f4]"></div>
            Semantic analysis of your descriptions
        </li>
        <li className='flex items-center mt-3 text-[#d3d3d3] text-lg'>
            <div className="mr-3 h-1.5 w-1.5 rounded-full bg-[#8707f4]"></div>
            Contextual understanding of language
        </li>
        <li className='flex items-center mt-3 text-[#d3d3d3] text-lg'>
            <div className="mr-3 h-1.5 w-1.5 rounded-full bg-[#8707f4]"></div>
            Personalized results based on your preferences
        </li>
      </ul>
    </div>
  )
}

export default OurTechnology