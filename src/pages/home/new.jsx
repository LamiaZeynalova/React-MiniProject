import React, { useEffect, useState } from 'react'
import './new.css'

import { useDispatch, useSelector } from 'react-redux';
import EndSection from '../../components/endsection';
import Partner from '../../components/partner';
import FaqSection from '../../components/Faqsection';
import SubSection from '../../components/subsection';
import SubSection1 from '../../components/subsection1';
import SubSection2 from '../../components/subsection2';
import Links from '../../components/link';
import Slider from '../../components/slider';
import UsersList from '../../components/userslist';


const New = () => {
   return (
    <>
    <Slider/>
    <Links/>
       <div className='users-section'>
        <button style={{marginTop:"100px"}} className='offer-btn'>ÜZVLƏRİMİZ</button>
        <h1 className='users_text'>Top bəxşiş toplayanlar</h1>
        <h3 style={{color:"gray", marginBottom:"70px"}}>Siz də öz yaradıcılıq fəaliyyətinizdən qazanan şəxslərdən olun.</h3>
            </div>
    <UsersList/>
    <SubSection1/>
    <SubSection2/>
    <SubSection/>
   <div className="faq-header">
    <button className="faq-button">FAQ</button>
     <h2 className="faq-title">Sizi Maraqlandıran Suallara Cavablar</h2>
    </div>
    <FaqSection/>
    <Partner />
    <EndSection/>


    </>
  )}

export default New