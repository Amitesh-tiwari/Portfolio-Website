import React from 'react'
import './services.css'
import{BsCheckLg} from 'react-icons/bs'

const services = () => {
  return (
    <section id = " services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>The Basics </h3>
          </div>
        <ul className='service_list'>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p> Database management.</p>
          </li>

          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Operating Systems .</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Data Structures and Algorithms.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Cloud Computing.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Computer Networks.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Communication and Leadership Skills.</p>
          </li>
          
        </ul>
        </article>
        {/* end of UI/UX*/}
        <article className='service'>
          <div className='service_head'>
            <h3>Development</h3>
          </div>
        <ul className='service_list'>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>HTML</p>
          </li>

          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>React JS.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>CSS</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>JavaScript</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Devops and CI/CD pipleine.</p>
          </li>
          
        </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Coding</h3>
          </div>
        <ul className='service_list'>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Solved 100+ questions combined.</p>
          </li>

          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Acheiver at CodeStudio.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Skilled in Problem Solving.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>4⭐@HackerRank in C and C++.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Solved 50+ questions combined on different paltforms.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Skilled in Puzzle solving.</p>
          </li>

        </ul>
        </article>
      </div>
    </section>
  )
}

export default services

