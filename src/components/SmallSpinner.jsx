import React from 'react'
import spinner from '../assets/spinner1.svg'

const SmallSpinner = () => {
  return (
    <img src={spinner} alt='spinner' className='mr-2 size-5 animate-spin'/>
  )
}

export default SmallSpinner