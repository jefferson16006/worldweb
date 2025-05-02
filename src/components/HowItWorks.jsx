import React from 'react'
import { FaSearch, FaBook } from 'react-icons/fa'
import IconComponent from './IconComponent'
import sparkle from '../assets/sparkle.svg'

const HowItWorks = () => {
  return (
    <>
        <h1 className='mt-17 text-center font-bold text-5xl'>How It Works</h1>
        <p className='mt-3 mb-10 text-center text-xl text-gray-400'>
          Our reverse dictionary uses advanced natural language 
          processing to find the<br/> words you're looking for.
        </p>
        <div>
          <IconComponent icon={ <FaSearch className='h-6 w-6 text-rose-400'/> } />
          <h1 className='mt-4 font-medium text-2xl'>Describe the Word</h1>
          <p className='mt-3 text-lg text-gray-400'>
            Enter a description, definition, or concept that you're 
            trying to find a word for.
          </p>
        </div>
        <div className='mt-6'>
          <IconComponent icon={ <img src={sparkle} alt='sparkle' width={30} height={30}/> } />
          <h1 className='mt-4 font-medium text-2xl'>AI Processing</h1>
          <p className='mt-3 text-lg text-gray-400'>
            Our algorithm analyzes your description and searches 
            through millions of word relationships.
          </p>
        </div>
        <div className='mt-6 mb-20'>
          <IconComponent icon={ <FaBook className='h-6 w-6 text-rose-400'/> } />
          <h1 className='mt-4 font-medium text-2xl'>Get Results</h1>
          <p className='mt-3 text-lg text-gray-400'>
            Receive your word, plus a list of potential words that match your description, 
            complete with its usage.
          </p>
        </div>
    </>
  )
}

export default HowItWorks