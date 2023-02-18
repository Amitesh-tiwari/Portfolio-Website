import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nllcb0n', 'template_s2vhroa', form.current, 'RMbi6DUFh4-iwu4qX')
      e.target.reset()
  };
  return (
    <section id ='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
           <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummy@gmail.com</h5>
            <a href='amiteshtiwari057@gmail.com' target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
           <AiFillInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Amitesh-Tiwari</h5>
            <a href='https://www.instagram.com/_amitesh_tiwari/' target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
           <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9555439630</h5>
            <a href='https://api.whatsapp.com/send?phone=+919555439630' target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='Name'placeholder='Your Full Name'required />
          <input type="email" name='Email'placeholder='Your Email'required/>
          <textarea name='message' rows="7" placeholder='Your Message' required/>
          <button type="submit"className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
