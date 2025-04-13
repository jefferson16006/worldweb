import React from 'react'

const SearchResults = ({display, data}) => {
  return (
    <div className={`flex flex-col justify-center items-center ${display}`}>
        <h1 className='mb-4 text-2xl text-[#d3d3d3]'>Here is your result:</h1>
        <div className='result-container'>
            <div className='word'>word</div>
            <div className='synonym'>synonym</div>
            <div className='usage'>usage</div>
            <div className='antonym'>antonym</div>
        </div>
    </div>
  )
}

export default SearchResults