import React from 'react';
import gifImage from '../assets/animated.gif'; 
import logoImage from '../assets/pfp.png';

const handleClick = () => {
    window.open ('https://anilist.co/user/ch1kim0n1/', '_blank');
}

const Header = () => {
  return (
    <header className='header'>
      <div>
        <img src={gifImage} alt="GIF" className="gif"/>
      </div>
      <div className='logoAlink'>
        <img src={logoImage} alt="Logo" className="logo"/>
        <button className="button" onClick={handleClick}>ch1kim0n1</button>
      </div>
    </header>
  );
}

export default Header;
