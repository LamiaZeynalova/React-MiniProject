import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import "./faq.css";
import bgFaq from ".././images/bg-image-10.jpg"
import FaqSection from '../components/Faqsection';
import { Link } from 'react-router-dom';


const Faq = () => {
  return (
    <div>
      <div className='faq-img'>
    <img src={bgFaq} alt='Faq-img'/>
    <div className="faq-content">
          <div className="faq_head">Sual-Cavab</div>
          <div className='faq_body'>
            <p><Link to="/">Əsas</Link></p>
             <span><SlArrowRight /></span>
            <Link to="/faq"><span> Sual-Cavab</span></Link>
          </div>
        </div>
</div>
<div className='faq_section'>
<FaqSection className="tab"/>
</div>

</div>
  )
}

export default Faq


