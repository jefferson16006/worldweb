import React from 'react';

const SearchResults = ({ data }) => {
  // console.log("Rendering SearchResults with:", data);

  if (!data || Object.keys(data).length === 0) return null; // Prevents rendering if no data is available

  return (
    <div className={`flex flex-col justify-center items-center`}>
      <h1 className='mb-4 text-2xl text-[#d3d3d3]'>Here is your result:</h1>
      <div className='result-container'>
        <div className='word result-struct'>
          <span className='text-[#8707f4] text-xl'>WORD</span>
          <span className='capitalize'>{data.word}</span>
        </div>
        <div className='synonym flex flex-col gap-5'>
          <div className='flex flex-col'>
            <span className='text-[#8707f4] text-xl'>SYNONYM</span>
            <span className='capitalize'>{data.synonyms?.join(', ') || 'No synonyms found.'}</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[#8707f4] text-xl'>ANTONYM</span>
            <span className='capitalize'>{data.antonyms?.join(', ') || 'No antonyms found.'}</span>
          </div>
        </div>
        <div className='usage result-struct'>
          <span className='text-[#8707f4] text-xl'>USAGE</span>
          {data.usage?.map((u, i) => (
            <div key={i}>{i+1}. {u}</div>
          )) || 'No usage examples found.'}
        </div>
        <div className='suggestion result-struct'>
          <span className='text-[#8707f4] text-xl'>SUGGESTION</span>
          <span className='capitalize'>{data.suggestions?.join(', ') || 'No suggestions found.'}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
