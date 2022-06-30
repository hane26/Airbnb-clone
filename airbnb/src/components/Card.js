import React from 'react'
import portrait from './images/one.jpg';
import './Card.css'
import star from './images/1828884.png';

 function Card() {

  return (

    <div className='Card'>
        <img src={portrait} className="por" alt="por" />
        <div className="card--stats">
             <img src={star} className="star" alt="star" />
             <span > 5.0 </span>
             <span className='grey'> (6) . </span>
             <span className='grey'> USA </span>
        </div>
        <p>
            Life Lessibs with Katie Zaferes
        </p>
        <p>
          <span className='bold'> From $136 </span> / person
        </p>
    </div>
  )
}
export default Card;


// Language: javascript
// === in Javascript is strict equality and it does return a boolean value