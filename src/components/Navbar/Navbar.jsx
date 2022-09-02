import React from 'react'
import './style.css'
import Logo from '../../img/face.png';

const Navbar = () => {
  return (
    <div className="nav">
        <nav>
            <img src={Logo} alt="logo" className='logo' />
            <h4 className='app'>Meme Generator</h4>
            <h4 className='source'>Github</h4>
        </nav>
    </div>
  )
}

export default Navbar