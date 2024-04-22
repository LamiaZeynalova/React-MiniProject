import React from 'react'
import "./footer.css"
import logo from "../../images/logo (1).webp";
import { FaTwitter,FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
      <div className='footer-content'>
        <div className="footerlogo">
       <h3> <img className='logo-img' src={logo} alt="" /></h3>
        <p>Biz hər zaman istedadlı və yaradıcı insanların axtarışındayıq. Özünüzü tanıtmaqdan çəkinməyin!</p>
        <div className='iconss'>
          <a href='https://www.instagram.com/kofe.al/'><span><FaTwitter /></span></a>
          <a href='https://www.facebook.com/kofe.al'><span><FaInstagram /></span></a>
          </div>
        </div>  
        <div className="footerarea">
          <h3>Xüsusiyyətlər</h3>
          <ul>
            <li>Destek</li>
            <li>Abunəlik</li>
            <li>Mağaza</li>
            <li>QR kodlar</li>
            <li>Patreon Alternativi</li>
          </ul>
        </div> 
        <div className="footerarea">
          <h3>İnteqrasiyalar</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Telegram</li>
            <li>Wordpress</li>
          </ul>
        </div> 
        <div className="footerarea">
            <h3>Kofeal</h3>
          <ul>
            <li>Haqqimizda</li>
            <li>Qaydalar</li>
            <li>Məxfilik</li>
           
          </ul>
        </div>
      </div>  
      <hr></hr> 
      <div className='footerend'>
        <span>Copyright © 2024 BONPARA layihəsi. Bütün hüquqlar qorunur.</span>
      </div>
      </div>
    </>
  )
}

export default Footer