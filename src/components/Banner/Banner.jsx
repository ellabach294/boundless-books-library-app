import React from 'react'
import './Banner.scss'
import SearchBar from '../SearchBar/SearchBar'

const Banner = () => {
  return (
    <div className='hero-banner'>
        <h2>Discover Your Next Favourite Book</h2>
        <p>Use the search bar to explore and find the book you love in our library</p>
        <SearchBar />
    </div>
  )
}

export default Banner