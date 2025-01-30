import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

import "./BookDetails.scss"
import Navbar from '../Navbar/Navbar'
import defaultImg from '../../img/cover-not-available.svg'
import Spinner from '../Spinner/Spinner';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookDetails = async() => {
            try {
                const response = await axios.get(
                    `https://openlibrary.org/works/${id}.json`
                );

                const data = response.data;

                let authors = [];
                if(data.authors) {
                    authors = await Promise.all(
                        data.authors.map(async(authorEntry) => {
                            try {
                                const res = await axios.get(
                                    `https://openlibrary.org${authorEntry.author.key}.json`
                                );
                                return res.data.personal_name || 'Unknown Author';
                            } catch (err) {
                                console.error("Failed to fetch book authors: ", err)
                                return 'Unknown Author';
                            }
                        })
                    )
                }

                const bookData = {
                    title: data.title,
                    author: data.authors?.join(', ') || "Unknow Authors",
                    description: data.description?.value || data.description || "No description available.",
                    cover: data.covers?.[0]
                        ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
                        : defaultImg,
                    authors,
                    publishDate: data.first_publish_date || "Unknown",
                }
                setBook(bookData);
                setError(null);

            } catch(err) {
                console.error('failed', err)
                setError('Failed to fetch the book details.')
            } finally {
                setLoading(false)
            }
        }

        fetchBookDetails();
    }, [id])

    if(loading) return <Spinner />
    if(error) return <div className='error'>{error}</div>

  return (
    <div>
        <Navbar />
        
        <div className='book-details container'>
            <Link to="/" className="back-button">&larr; Back to Search</Link>

            <div className='details-container'>
                <h2>{book.title}</h2>

                <div className='book-info'>
                    <img 
                        src={book.cover} 
                        alt={book.title}
                        className='book-cover'
                        onError={(e) => {
                            e.target.src = defaultImg
                        }} 
                    />

                    <div className='book-content'>
                        <p><span>Authors: </span>{book.authors.length > 0 ? book.authors.join(', ') : 'Unknown Authors'}</p>
                        <p><span>Published Date:</span> {book.publishDate}</p>
                        <div className='description' dangerouslySetInnerHTML={{ __html: book.description }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookDetails