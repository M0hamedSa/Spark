import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-head'>
      <div className='app__menuitem-name'>
      <p className='p__cormorant2' style={{color: '#DCCA87'}}>{title}</p>
      </div>
      <div className='app__menuitem-dash' />
      <div className='app__menuitem-price'>
      <p className='p__cormorant2' >{price}</p>
      </div>
    </div>
    <div className='app__menuitem-sub'></div>
    <p className='p__cormorant2' style={{color: '#AAA'}}>{tags}</p>
  </div>
);

export default MenuItem;
