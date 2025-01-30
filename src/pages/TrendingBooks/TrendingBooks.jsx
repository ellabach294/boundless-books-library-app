import axios from 'axios'
import React, { useEffect, useState } from 'react'

import "./TrendingBooks.scss"
import BookList from '../../components/BookList/BookList'

const TrendingBooks = () => {
  const [trendingBooks, setTrendingBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const RESULTS_PER_PAGE = 9;

  useEffect(() => { 
    const fetchTrendingBooks = async() => {
      try {
        const response = await axios.get(
          "https://openlibrary.org/trending/daily.json"
        );
        setTrendingBooks(response.data.works)
        setTotalPages(Math.ceil(response.data.works.length / RESULTS_PER_PAGE))
      } catch (err) {
        console.error("Error fetching trending books: ", err)
      }
    }

    fetchTrendingBooks()
  },[])

  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE
  const endIndex = startIndex + RESULTS_PER_PAGE;
  const displayedBooks = trendingBooks.slice(startIndex, endIndex)

  const handleNextPage = () => {
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage -1)
    }
  }

  return (
    <div className='trending-books container'>
      <h2 className='trending-books__title'>Trending Books</h2>
      <BookList books={displayedBooks} />

      <div className='pagination'>  
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className='pagination-button'
        >
          Previous
        </button>
        <span className='pagination-info'>Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className='pagination-button'
        >
          Next
        </button>
      </div>
    </div>  
  )
}

export default TrendingBooks