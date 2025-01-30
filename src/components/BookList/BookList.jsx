import React, { useEffect, useState } from 'react'
import './BookList.scss';
import BookCard from '../BookCard/BookCard'
import Spinner from '../Spinner/Spinner'

const BookList = ({books}) => {
  const [visibleBooks, setVisibleBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVisibleBooks(books);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer)
  }, [books])

  return (
    <div>
        <div className='book-list'>
          {loading ? (
            <Spinner />
          ) : (
            visibleBooks.map((book) => <BookCard key={book.key} book={book} />)
          )}
        </div>
    </div>
  )
}

export default BookList