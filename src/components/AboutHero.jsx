import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const AboutHero = () => {
  return (
    <div className='-mx-5 bg-gray-900 p-5'>
      <div className='mt-15 bg-rose-900/40 py-0.5 font text-center rounded-lg w-34'>
        About Our App
      </div>
      <h1 className='mt-3 font-bold text-6xl text-violet-600'>
        Find the Peferct Word When It's on the<br/> Tip of Your Tongue
      </h1>
      <p className='mt-6 text-[#d3d3d3] text-xl'>
        Our reverse dictionary helps you find words based on their meaning, <br />
        not their spelling. Perfect for writers, students, and anyone <br/>
        who loves language.
      </p>
      <Link to='/home' className='mt-5 mb-12 py-2 px-4 w-40 text-center font-bold bg-white rounded-md text-black flex gap-4 justify-center items-center cursor-pointer hover:bg-gray-200'>
        Try It Now
        <FaArrowRight />
      </Link>
    </div>
  )
}

export default AboutHero