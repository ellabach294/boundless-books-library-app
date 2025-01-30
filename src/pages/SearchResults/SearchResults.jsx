import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

import './SearchResults.scss'
import BookList from '../../components/BookList/BookList';
import Spinner from '../../components/Spinner/Spinner';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q' || "");

  const RESULTS_PER_PAGE = 9;

  useEffect(() => {
    if(query) {
      const fetchSearchResults = async() => {
        try {
          setIsLoading(true)
          const response = await axios.get(
            `https://openlibrary.org/search.json?title=${query}`
          );
          setResults(response.data.docs);
          setTotalPages(Math.ceil(response.data.docs.length / RESULTS_PER_PAGE));
        } catch (err) {
          console.error("Error fetching search results:", err)
        } finally {
          setIsLoading(false)
        }
      }
      fetchSearchResults();
    }
  }, [query])

  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
  const endIndex = startIndex + RESULTS_PER_PAGE;
  const displayedResults = results.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className='search-results container'>
      <h3 className='search-intro'>Search Results for "{query}"</h3>
      {isLoading ? (
        <Spinner />
      ): (
        <>
          <BookList books={displayedResults} />
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
        </>
      )}
    </div>
  )
}

export default SearchResults