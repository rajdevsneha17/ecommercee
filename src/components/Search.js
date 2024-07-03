import React from 'react'

const Search = ({query,setQuery}) => {
  return (
    <div>
     <form>
        <div>
            <input type='text' placeholder='Search Here'
            className="w-96 border-black border-2 rounded-full pl-10 "
            // value={query}
            onChange={(e)=> setQuery(e.target.value)}
            ></input>
        </div>
     </form>
     <div></div>
    </div>
  )
}

export default Search
