import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
 
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href = "https://linkedin.com/in/amitesh-tiwari" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href = "https://github.com/in/amitesh-tiwari" target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
      <a href = "https://facebook.com/in/amitesh-tiwari" target="_blank" rel="noreferrer"><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocials

