import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
    
    return (
        <div className='search'>

            <img src="search.svg" alt="search" />
            <input 
                type="text" 
                placeholder='Search for movies...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default Search