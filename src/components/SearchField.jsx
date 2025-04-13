import { useState } from 'react'
import SearchResults from './SearchResults';
import Spinner from './Spinner'

const SearchField = () => {
  const [searchInput, setSearchInput] = useState('')
  const [apiSearchResults, setApiSearchResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSentenceSearch = async (e) => {
    e.preventDefault();
    console.log('Sent');
    setLoading(true)
    try {
      const res = await fetch('/api/mockAPI', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({searchInput})
      })
      const data = await res.json()
      setApiSearchResults(data)
      //create api to test visibility of search result. block or hidden.
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
    //send post request containing searchInput which would be an object and receive response.
    //set state with fetched data, pass as props to SearchResults and 
    //display in SearchResults component.
  }

  return (
    <>
      <h1 className='mt-25 max-[886px]:mt-10 text-center text-4xl max-[886px]:text-3xl font-medium mb-6'>Find your specific word</h1>
      <form className='flex justify-center gap-3 max-[886px]:flex-col max-[886px]:gap-0 max-[886px]:items-center mb-10'>
        <textarea 
          id='search' 
          name='search'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='bg-[#323232] mb-4 p-3 rounded-lg w-[50rem] outline-none resize-none 
                     max-[886px]:w-full max-[886px]:h-18'
          placeholder='Type in the meaning of a word...'></textarea>

        <button
          className='bg-violet-700 text-white rounded-lg h-18 px-7 py-3 font-medium hover:bg-violet-500 
                     cursor-pointer text-center w-fit max-[886px]:w-full max-[886px]:h-13'
          onClick={handleSentenceSearch}
        >
          Search
        </button>
      </form>
      {loading ? <Spinner /> : (
        <SearchResults
          display={ apiSearchResults.length > 0 ? 'block' : 'hidden'}
          data={apiSearchResults}
        />
      )}
    </>
  )
}

export default SearchField
