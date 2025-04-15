import React from 'react';

const SearchResults = ({ data }) => {
  console.log(data); // Logs the data passed to SearchResults
  console.log("Rendering SearchResults with:", data);

  if (!data || Object.keys(data).length === 0) return null; // Prevents rendering if no data is available

  return (
    <div className={`flex flex-col justify-center items-center`}>
      <h1 className='mb-4 text-2xl text-[#d3d3d3]'>Here is your result:</h1>
      <div className='result-container'>
        <div className='word'>{data.word}</div>
        <div className='synonym'>{data.synonyms?.join(', ') || 'No synonyms found'}</div>
        <div className='usage'>
          {data.usage?.map((u, i) => (
            <div key={i}>{u}</div>
          )) || 'No usage examples found'}
        </div>
        <div className='antonym'>{data.antonyms?.join(', ') || 'No antonyms found'}</div>
      </div>
    </div>
  );
};

export default SearchResults;
