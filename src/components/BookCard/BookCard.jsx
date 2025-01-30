import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { truncateText } from '../../utils/helpers'
import './BookCard.scss'
import defaultImage from "../../img/cover-not-available.svg"

const BookCard = ({book}) => {
    const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    const authorName = book.author_name ? book.author_name.join(", ") : "Unknown Author";
    const [imageLoaded, setImageLoaded] = useState(true);
    const [imageError, setImageError] = useState(false)

    const getImageUrl = () => {
      if(imageError || !book.cover_i) {
        return defaultImage;
      }
      return coverUrl
    }

  return (
    <Link to={`/book${book.key}`} className='book-card'>
      {!imageLoaded && <div className='image-placeholder' />}
        <img 
          src={getImageUrl()} 
          alt={book.title}
          loading='lazy'
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={{ display: imageLoaded ? "block" : "none" }} 
        />
        <h2 title={book.title}>{truncateText(book.title, 40)}</h2>
        <h3>{authorName}</h3>
        <p>Editions: {book.edition_count}</p>
        <p>First Published: {book.first_publish_year}</p>
    </Link>
  )
}

export default BookCard