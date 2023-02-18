import React from 'react'
import './about.css'
import GOLU from '../../assets/GOLU.JPG'
import {BsAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id ='about'>
      <h5> Get To Know More</h5>
      <h2> About Me</h2>
      <div className='about__conatiner'>
        <div className='about_me'>
        <div className='about_me-image'>
          <img src={GOLU} alt='About Image'/>
        </div>
        </div>
        <div className='about_conatiner'>
          <div className='about_cards'>
            <article className='about-card'>
              <BsAwardFill className="about_icons"/>
              <h5> Experience</h5>
              <small> 1+ Years Working</small>
            </article>

            <article className='about-card'>
              <FiUsers className="about_icons"/>
              <h5> Clients</h5>
              <small> 100+ Clients</small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className="about_icons"/>
              <h5> Projects</h5>
              <small> 10 + completed projects</small>
            </article>
          </div>

         </div>
          <p> Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            gdsghgesuygejwguygwrughuwgu
            werwhguyhfruirhw
            rfjehrfiuerhjitehrklfrkjtge
            efrhjietwlrhigtuherwi;gdefiuygewiyfgqeiuyfgqwwe
            farwehfjhbvfdsuygrbukbefkubfeukjwh
          </p>  

        
        
      </div>
       
   
    </section>
  )
}

export default About
