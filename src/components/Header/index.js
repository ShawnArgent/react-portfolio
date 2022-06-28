import React from 'react';
import image from '../../assets/MyAltLogo.jpg'

const Header = (props) => {
    return (
      <header className='flex-row space-between px-1'>
        <a className='mylogo' href='https://shawnargent.github.io/react-portfolio/'>
      <img src={image} width={200} height={200} alt="logo"/>
          </a>
      {props.children}
          
    </header>
  );
}

export default Header;
