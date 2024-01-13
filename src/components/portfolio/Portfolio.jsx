import React from 'react'
import './portfolio.css'
import a1 from '../../assets/weather-forecast-146472_1280.png'
import a2 from '../../assets/calculator-154322_640.png'
import a3 from '../../assets/saurabh-gill-38RthwbB3nE-unsplash.jpg'
import a4 from '../../assets/dual-screen-1745705_640.png'
import a5 from '../../assets/programmer-1653351_640.png'
import a6 from '../../assets/a5.webp'

const data =[
  {
    id:1,
    image: a1,
    title:"Weather Website",
    github:"https://github.com/Amitesh-tiwari/Weather-Website",
    demo:"http://dribble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
  },

  {
    id:2,
    image:a2,
    title:"Calculator and UNit Converter",
    github:"https://github.com/Amitesh-tiwari/CodeClause_UnitConverter",
    demo:"http://dribble.com/shorts/16580766-Charts-templates-infographics-in-Figma"
  },

  {
    id:3,
    image:a3,
    title:"Spotify Clone",
    github:"https://github.com/Amitesh-tiwari/Spotify-Clone",
    demo:"http://dribble.com/shorts/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
  },

  {
    id:4,
    image:a4,
    title:"Code Editor",
    github:"https://github.com/Amitesh-tiwari/Code_Clause_CodeEditor",
    demo:"http://dribble.com/shorts/16955822-Maintaining-tasks-and-tracking-progress"
  },

  {
    id:5,
    image:a5,
    title:"Text Converter",
    github:"https://github.com/Amitesh-tiwari/my-app--TextUtils",
    demo:"http://dribble.com/shorts/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
  {
    id:6,
    image:a6,
    title:"Dashboard",
    github:"https://github.com/Amitesh-tiwari/Admin-Panel",
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
            <a href={github} className='btn' target='_blank' rel="noreferrer" >Github</a>
            <a href={demo}className='btn btn-primary' target='_blank' rel="noreferrer" >Live Demo</a>
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

