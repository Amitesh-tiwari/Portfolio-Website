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
          <img src={GOLU} alt='About'/>
        </div>
        </div>
        <div className='about_conatiner'>
          <div className='about_cards'>
            <article className='about-card'>
              <BsAwardFill className="about_icons"/>
              <h5> Experience</h5>
              <small> 6+ Months Working as a Developer</small>
            </article>

            <article className='about-card'>
              <FiUsers className="about_icons"/>
              <h5> Clients</h5>
              <small> 10+ clients </small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className="about_icons"/>
              <h5> Projects</h5>
              <small> 20 + completed projects</small>
            </article>
          </div>

         </div>
          <p> Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA, CSS, PYTHON, JAVASCRIPT, and HTML, React js. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.
          </p>  

        
        
      </div>
       
   
    </section>
  )
}

export default About

