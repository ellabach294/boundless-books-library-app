import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SearchBar.scss'

const SearchBar = ({onSearchResult}) => {
    const [query, setQuery] = useState("")
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!query.trim()) return;
        navigate(`/search?q=${query}`)
    }

  return (
    <form onSubmit={handleSearch} className='search-bar'>
        <input 
            type='text' 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search for books...' 
            className='search-input'
        />
        <button type='submit' className='search-btn'>Search</button>
    </form>
  )
}

export default SearchBar