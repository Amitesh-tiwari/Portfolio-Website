import React from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Amitesh Tiwari</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://instagram.com/_amitesh_tiwari?igshid=ZDdkNTZiNTM='><AiFillInstagram/></a>
        <a href='https://www.linkedin.com/in/amitesh-tiwari'><BsLinkedin/></a>
        <a href='https://github.com/Amitesh-tiwari'><BsGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Amitesh Tiwari. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default footer
