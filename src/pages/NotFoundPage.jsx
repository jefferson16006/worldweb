import React from 'react'
import {Link} from 'react-router-dom'
import {FaExclamationTriangle} from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section class="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className='text-violet-600 text-[100px] mb-5'/>
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <Link
        to="/home"
        class="text-white bg-violet-700 hover:bg-violet-600 rounded-md px-6 py-3 mt-4"
        >Go Back</Link>
    </section>
  )
}

export default NotFoundPage