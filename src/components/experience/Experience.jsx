import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id ='experience'> 
    <h5> What Skills I Have</h5>
    <h2> My Experience</h2>

    <div className='experience_container'>
      <div className='experience_frontend'>
      <h3> Web development</h3>
      <div className='experience_content'>
        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <h4>HTML</h4>
         <small className='text-light'>Experienced</small>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <h4>CSS</h4>
         <small className='text-light'>Intermediate</small>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <h4>JavaScript</h4>
         <small className='text-light'>Beginner</small>
        </article>
        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <h4>React JS</h4>
         <small className='text-light'>Intermediate</small>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <h4>Wordpress </h4>
         <small className='text-light'>Intermediate</small>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <h4> MongoDB </h4>
         <small className='text-light'>Intermediate</small>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <h4> DevOps </h4>
         <small className='text-light'>Intermediate</small>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <h4> Node JS </h4>
         <small className='text-light'>Intermediate</small>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <h4> Express JS </h4>
         <small className='text-light'>Intermediate</small>
        </article>
      </div>
      </div>
     <div className='Courses-Done'>
      <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <div>
         <h4> Coding(DSA)</h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <div>
         <h4> SQL </h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <div>
         <h4>Operating Systems</h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <div>
         <h4>Databe management</h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <div>
         <h4>Problem Solving</h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <div> <h4>Docker</h4>
         <small className='text-light'>Intermediate</small></div>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <div>
         <h4>Machine learning </h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>

        <article className='experience_details'>
         <BsFillPatchCheckFill className='experience_details_icons'/>
         <div>
         <h4>Cloud Computing </h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>
      </div>
    </div>
    </section>
  )
}

export default experience

