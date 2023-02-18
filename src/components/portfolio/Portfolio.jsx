import React from 'react'
import './portfolio.css'
import a1 from '../../assets/a1.webp'
import a2 from '../../assets/a2.webp'
import a3 from '../../assets/a3.webp'
import a4 from '../../assets/a4.webp'
import a5 from '../../assets/a5.webp'
import a6 from '../../assets/a5.webp'

const data =[
  {
    id:1,
    image:a1,
    title:"Crypto Currency dashboard",
    github:"https://github.com/Amitesh-tiwari",
    demo:"http://dribble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
  },

  {
    id:2,
    image:a2,
    title:"Charts templates & infographics",
    github:"https://github.com/Amitesh-tiwari",
    demo:"http://dribble.com/shorts/16580766-Charts-templates-infographics-in-Figma"
  },

  {
    id:3,
    image:a3,
    title:"Figma dashboard UI kit for data design web apps",
    github:"https://github.com/Amitesh-tiwari",
    demo:"http://dribble.com/shorts/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
  },

  {
    id:4,
    image:a4,
    title:"Maintaining tasks and training programs",
    github:"https://github.com/Amitesh-tiwari",
    demo:"http://dribble.com/shorts/16955822-Maintaining-tasks-and-tracking-progress"
  },

  {
    id:5,
    image:a5,
    title:"Charts templates & infographics in Figma",
    github:"https://github.com/Amitesh-tiwari",
    demo:"http://dribble.com/shorts/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
  {
    id:6,
    image:a6,
    title:"Charts templates & infographics in Figma",
    github:"https://github.com/Amitesh-tiwari",
    demo:"http://dribble.com/shorts/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
]
const portfolio = () => {
  return (
   <section id ='portfolio'>
    <h5>My Recent work</h5>
    <h2>Portfolio</h2>
    <div className='portfolio_container'>
     {
      data.map(({id,image,title,github,demo}) =>{
        return(
          <article key = {id} className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={image} alt={title}/>
          </div>
            <h3>{title}</h3>
            <div className='portfolio_item_cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo}className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        )
      })
     }
    </div>
   </section>
  )
}

export default portfolio
