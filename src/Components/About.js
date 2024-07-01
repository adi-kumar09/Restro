import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />

        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>  
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food is An important part of a balanced diet
            </h1>
            <p className='primary-text'>
                Eating Green food provides us with multiple types of vitamins and Minerals.
            </p>
            <p className='primary-text'>
                Eating food from a clean place protects your body from germs.
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button' >Learn-more</button>
                <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>


            </div>
        </div>  
  </div>
    
  
}

export default About