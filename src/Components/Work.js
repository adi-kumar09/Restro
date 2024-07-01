import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"

const Work = () => {
    const workInfoData = [
        {
            image:PickMeals,
            title: "Pick Meals",
            text: "Choose the food of your liking.Although Everything we have is the best."
        },
        {
            image:ChooseMeals,
            title: "Choose Meals",
            text: "Choose the food of your liking.Although Everything we have is the best."
        },
        {
            image:DeliveryMeals,
            title: "Fast Deliveries",
            text: "We deliver the food with the speed of light.Directly to your home."
        },

    ];
  return <div className='work-section-wrapper'>
    <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
        <h1 className='primary-heading'> How it Works</h1>
        <p className='primary-text'>
            Funtionality of the page ,How it works ,what its gonna do after you click on button on menu bar.
        </p>
    </div>
    <div className='work-section-bottom'>
        {
            workInfoData.map((data)  => (
               <div className='work-section-info'>
                   <div className='info-boxes-img-container'>
                      <img src={data.image} alt='' />
                   </div> 
                   <h2>{data.title}</h2>
                   <p>{data.text}</p> 
               </div>   
            ) )
        }

    </div>

  </div>
}

export default Work