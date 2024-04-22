
import React, { useState, useEffect } from 'react';
import './Words.css'; 
import reqem from "../images/500.svg";
import { Link } from 'react-router-dom';



  

const rotatingWords = ["Video çək", "Kitab yaz", "İdman et", "Öyrədərək", "Danışaraq", "Rəsm çək"];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, []);
  return (
    <div className="main-section">
     <div className="backed-by">
      <h1>Global</h1>
      <img src={reqem} alt='500'/>
      <h1 >Backed by</h1>
     </div>
      <div className="rotating-text-container">
      <span className="cd-words-wrapper" style={{ width: '250px' }}>
          {rotatingWords.map((word, index) => (
            <b key={word} className={`theme-gradient ${index === activeIndex ? 'is-visible' : 'is-hidden'}`}>
              {word}
            </b>
          ))}
        </span>
        <span className="static-text">, sevdiyin işlə məşğul ol,
        <br></br>izləyicilərindən dəstək qazan!</span>
        
      </div>
      <div className='form'>
            <label className="form-label" htmlFor="username">kofe.al/</label>
            <input type="text" name='username' placeholder='username'/>
            <Link to="/register" ><button className='inputbtn'>Yarat </button></Link> 
          </div>
        <span>Yarat 🎉 Paylaş 🚀 Qazan ☕</span>
   
    </div>
  );
};

export default Slider;

