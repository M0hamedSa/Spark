import React from 'react';

import {images,data} from '../../constants';
import { SubHeading} from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
<div className='app__wrapper_info'>
<SubHeading title='Contact' />
<h1 className='headtext__cormorant2' style={{marginBottom:'3rem'}}>Find Us</h1>
<div className='app__wrapper-content'>
  <p className='p__opensans'>Lane End Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
  <p className='p__cormorant2' style={{color: '#DCCA87', margin:'2rem 0'}}>Opening Hours</p>
  <p className='p__opensans'> Mon - Fri: 10:00 am - 02:00 am</p>
  <p className='p__opensans'> Sat - Fri: 10:00 am - 03:00 am</p>
</div>
<button type='button' className='custom__button' style={{marginTop:'2rem'}}>Vist Us</button>
</div> 
<div className='app__wrapper_img'>
  <img src={images.findus} alt="Find Us" />
</div>
  </div>
);

export default FindUs;
