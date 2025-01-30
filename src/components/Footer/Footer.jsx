import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
        <p>&copy; {new Date().getFullYear()} Boundless Books. All rights reserved.</p>
        <p>Powered by <a href="https://openlibrary.org/" target="_blank" rel="noopener noreferrer">OpenLibrary API</a></p>
    </footer>
  )
}

export default Footer