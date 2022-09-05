import React from 'react'
import './style.css'
import Logo from '../../img/face.png';

const Navbar = () => {
  return (
    <header className="header">
    <img 
        src={Logo}
        className="header--image"
        alt='logo'
    />
    <h2 className="header--title">Meme Generator</h2>
    <h3 className="header--project">Github</h3>
</header>
  )
}

export default Navbar