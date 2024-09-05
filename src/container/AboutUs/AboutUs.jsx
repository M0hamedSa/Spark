import React from 'react';

import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <p className='p__opensans'>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
    <div className='app__aboutus-content_bell flex center'>
      <img src={images.G} alt="bell" />
    </div>

<div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>History</h1>
        <p className='p__opensans'>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
        <button type='button' className='custom__button'>Know more</button>
</div>

    </div>



    
    </div>


);

export default AboutUs;
