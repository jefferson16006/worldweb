import { useEffect, useState } from 'react';
import SearchResults from './SearchResults';
import Spinner from './Spinner';

const SearchField = () => {
  const [searchInput, setSearchInput] = useState('');
  const [apiSearchResults, setApiSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   console.log(apiSearchResults); // Logs the updated results when apiSearchResults changes
  // }, [apiSearchResults]);

  const handleSentenceSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/server/api/search-result', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchInput })
      });
  
      const data = await res.json();
      // console.log("Fetched data:", data);
      if(!res.ok) {
        document.getElementById('error').textContent = data.error
        return
      }
  
      // Check if it's an object
      if (data && typeof data === 'object') {
        setApiSearchResults(data)
        document.getElementById('error').textContent = ''
      } else {
        console.warn('Unexpected API response format')
        setApiSearchResults([])
      }
  
    } catch (err) {
      if (err) {
        document.getElementById('error').textContent = 'Server error. Please try again very soon.'
      }
      setApiSearchResults([]);
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <>
      <h1 className='mt-25 max-[886px]:mt-10 text-center text-4xl max-[886px]:text-3xl font-medium mb-6'>
        Find your specific word
      </h1>
      <form className='flex justify-center gap-3 max-[886px]:flex-col max-[886px]:gap-0 max-[886px]:items-center mb-10'>
        <textarea 
          id='search' 
          name='search'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='bg-[#323232] mb-4 p-3 rounded-lg w-[50rem] outline-none resize-none 
                     max-[886px]:w-full max-[886px]:h-18'
          placeholder='Type in the meaning of a word...'
        ></textarea>

        <button
          className='bg-violet-700 text-white rounded-lg h-18 px-7 py-3 font-medium hover:bg-violet-500 
                     cursor-pointer text-center w-fit max-[886px]:w-full max-[886px]:h-13'
          onClick={handleSentenceSearch}
        >
          Search
        </button>
      </form>

      <p className='text-red-500 text-center mb-6 text-center' id='error'></p>

      {loading ? (<Spinner />) : (
        apiSearchResults && <SearchResults data={apiSearchResults} />
      )}
    </>
  );
};

export default SearchField;
