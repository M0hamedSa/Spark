import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu,setToggleMenu]= React.useState(false);
  return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>SPARK</div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#menu'>Menu</a></li>
      <li className='p__opensans'><a href='#gallery'>Gallery</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>
    
  

    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#DCCA87' fontSize={27} onClick={()=>setToggleMenu(true)} />
      {toggleMenu && (
    <div className='app__navbar-smallscreen_overlay flex__center slide__bottom'>
      <MdClose fontSize={27} className="overlay__close" onClick={()=>setToggleMenu(false)}/>
      <ul className='app__navbar-smallscreen-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#menu'>Menu</a></li>
      <li className='p__opensans'><a href='#awards'>Awards</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>
      </div>
      )}
    </div>
  </nav>
)};

export default Navbar;
