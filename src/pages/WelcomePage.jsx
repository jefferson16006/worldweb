import React from 'react'
import logo from '../assets/book.svg'
import {Link} from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-4'>
      <img src={logo} width={200} height={200} alt='welcomeLogo' className='text-blue-100'/>
      <h1 className='text-3xl font-bold'>Welcome to WorldWeb</h1>
      <h3 className='-mt-2 mb-2'>Your go-to reverse dictionary app</h3>
      <Link to='/guest' className='px-4 py-2 border rounded-full w-60 text-[19px] hover:bg-violet-700 hover:border-violet-700 cursor-pointer text-center'>
        Continue as Guest
      </Link>
      <Link to='/auth/register' className='px-4 py-2 bg-violet-700 rounded-full w-60 text-[19px] hover:bg-violet-500 cursor-pointer text-center'>
        Register
      </Link>
    </div>
  )
}

export default WelcomePage
