import React from 'react'
import './header.css'
import CTA from './/CTA';
import GOLU from '../../assets/GOLU.JPG'
import HeaderSocials from './HeaderSocials';

const header = () => {
  return (
    <header>
      <div className="header_conatiner">
        <h5> Hello I'm</h5>
        <h1>
          Amitesh Tiwari
        </h1>
        <h2 className='text-light'> Front End Developer</h2>
        <CTA/>
        <HeaderSocials/>

        <div className='GOLU'>
        <img src={GOLU} alt='GOLU'/>
        </div>

        <a href='#contact' className='scroll__down'> Scroll down</a>
      </div>
    </header>
  )
}

export default header
