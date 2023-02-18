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
            <h3>UI/UX Design</h3>
          </div>
        <ul className='service_list'>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

        </ul>
        </article>
        {/* end of UI/UX*/}
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
        <ul className='service_list'>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

        </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Content creation</h3>
          </div>
        <ul className='service_list'>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>

          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BsCheckLg className='service_list_icons'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
        </article>
      </div>
    </section>
  )
}

export default services
