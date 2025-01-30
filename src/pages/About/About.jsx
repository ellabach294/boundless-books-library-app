import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import './About.scss'

const About = () => {
  return (
    <div className='about'>
      <Navbar />
      <div className='about__banner'>
        <h2>About the Boundless Books</h2>
      </div>
      <div className='about__content container'>
        <h3>Discover a World of Books</h3>
        <p>The Boundless Books is designed for book enthusiats to explore a vast collection of books using the OpenLibrary API. Easily search for authors, find book details, and get inspired by the world's literary treasures.</p>
        <p>Whether you're looking for classic literature, modern bestsellers, or niche topics, our platform provides an intuitive way to navigate and discover books effortlessly.</p>
      </div>
    </div>
  )
}

export default About