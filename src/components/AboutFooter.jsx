import React from 'react'

const AboutFooter = () => {
  return (
    <div className='-mx-5 bg-gray-900 border-t-2 border-white p-6 flex justify-center items-center text-gray-400'>
        &copy; {new Date().getFullYear()} WorldWeb. All rights reserved.
    </div>
  )
}

export default AboutFooter