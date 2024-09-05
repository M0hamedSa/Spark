import React from 'react';

import './SubHeading.css';


const SubHeading = ({ title }) => (
  <div className='app__subheading'>
    <p className='p__cormorant'>{title}</p>
  </div>
);

export default SubHeading;
