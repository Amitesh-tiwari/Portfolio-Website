import React from 'react'
import './testimonial.css'
import amitesh from '../../assets/amitesh.JPG'
import nandeni from '../../assets/nandeni.jpg'
import harshit from '../../assets/harshit.JPG'
import liza from '../../assets/liza.jpeg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Pagination } from 'swiper'
import 'swiper/css/pagination';

const data =[
  {
    avatar: amitesh,
    name:"Amitesh",
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. gdsghgesuygejwguygwrughuwgu werwhguyhfruirhw rfjehrfiuerhjitehrklfrkjtge efrhjietwlrhigtuherwi;gdefiuygewiyfgqeiuyfgqwwe farwehfjhbvfdsuygrbukbefkubfeukjwh"
  },
  {
    avatar:nandeni,
    name: "Nandeni",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. gdsghgesuygejwguygwrughuwgu werwhguyhfruirhw rfjehrfiuerhjitehrklfrkjtge efrhjietwlrhigtuherwi;gdefiuygewiyfgqeiuyfgqwwe farwehfjhbvfdsuygrbukbefkubfeukjwh"
  }, 
  {
    avatar:harshit,
    name:"Harshit",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. gdsghgesuygejwguygwrughuwgu werwhguyhfruirhw rfjehrfiuerhjitehrklfrkjtge efrhjietwlrhigtuherwi;gdefiuygewiyfgqeiuyfgqwwe farwehfjhbvfdsuygrbukbefkubfeukjwh"

  },
  {
    avatar:liza,
    name:"Liza",
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. gdsghgesuygejwguygwrughuwgu werwhguyhfruirhw rfjehrfiuerhjitehrklfrkjtge efrhjietwlrhigtuherwi;gdefiuygewiyfgqeiuyfgqwwe farwehfjhbvfdsuygrbukbefkubfeukjwh"
  }
]

const testimonial = () => {
  return (
    <section id ="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='testimonial_container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}>
        {
        data.map(({avatar,name,review},index)=>{
        return(
          <SwiperSlide key ={index}className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar}/>
          </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
        </SwiperSlide>
        )

          })
        }
      </Swiper>
    </section>
  )
}

export default testimonial
