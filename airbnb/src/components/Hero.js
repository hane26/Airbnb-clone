import React from 'react'
import grid from './images/gridpics.jpg';
import './Hero.css'

 function Hero() {
  return (
    <section className='hero'>
        <img src={grid} className="grid-pics" alt="grid" />

        <h1 className='titre'>Online Experiences</h1>
        <p className='para'>Unique activities we can do together,
          led by a world of hosts- all without leaving home</p>

    </section>
  )
}

export default Hero;