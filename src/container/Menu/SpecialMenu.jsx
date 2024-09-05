import React from 'react';
import {images,data} from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__roomPrices flex__center section__padding' id='menu'>
  <div className='app__roomPrices-title'>
    <SubHeading title="Reservation"/>      
  </div>
  <h1 className='headtext__cormorant2'>Prices</h1>
  <div className='app__roomPrices-menu'>

  <div className='app__roomPrices-menu_rooms flex__center'>
    <p className='app__roomPrices-menu_heading'>Room</p>
    <div className='app__roomPrices-menu_items'> 
      {data.rooms.map((room,index)=>(<MenuItem key={room.title+index} title={room.title} price={room.price} tags={room.tags}/>))}
    </div>
  </div>

  <div className='app__roomPrices-menu_img'>
    <img src={images.menu} alt="menu img" />
  </div>

  <div className='app__roomPrices-menu_suite flex__center'>
    <p className='app__roomPrices-menu_heading'>suite</p>
    <div className='app__roomPrices-menu_items'>
      {data.suites.map((suite,index)=>(<MenuItem key={suite.title+index} title={suite.title} price={suite.price} tags={suite.tags}/>))}
    </div>
  </div>

  </div>

  <div style={{marginTop: '15px'}}>
    <button type='button' className='custom__button'>View more</button>
  </div>
  </div>
);

export default SpecialMenu;
