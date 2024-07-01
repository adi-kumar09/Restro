import React from 'react'
import ProfilePic from "../Assets/john-doe.webp"
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
  return <div className='work-section-wrapper'>
    <div className='work-section-top'>
        <p className='primary-subheading'>Testimonial</p>
        <h1 className='primary-heading'>What They are Saying</h1>
        <p className='primary-text'>
            Took a lot of Effort and work to build this website .I sincerely hope it will make your life Easier.
        </p>
    </div>
    <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt='' />
        <p>
            Myself Aditya kumar ,I am really happy to build this website as it makes Everyone life a little easy.
        </p>
        <div className='testimonials-stars-container'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <h2>The Creater</h2>
    </div>

  </div>
  
}

export default Testimonial