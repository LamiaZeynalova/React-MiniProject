import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo (1).webp';
import { IoMenu } from 'react-icons/io5';
import Az from '../../images/az.webp';
import Ru from '../../images/ru.webp';
import En from '../../images/en.webp';
import tr from '../../images/tr.webp';
import { SlSocialFacebook } from 'react-icons/sl';
import { IoLogoInstagram, IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [hoverDropdown, setHoverDropdown] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <section className='nav-section'>
        <nav className='nav'>
          <Link to='/'>
            <img src={logo} className='logo' alt='logo' />
          </Link>
          <div className='menu-links'>
            <ul>
              <li>
                <Link to='/uzvlerimiz'>Üzvlərimiz</Link>
              </li>
              <li>
                <Link to='/blogs'>Bloq</Link>
              </li>
              <li>
                <Link to='/faq'>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className='nav-buttons'>
            <div
              className='language'
              onMouseEnter={() => setHoverDropdown(true)}
              onMouseLeave={() => setHoverDropdown(false)}
            >
              <div className='language-content'>
                <img src={Az} alt='Azerbaijan Flag' />
                <p>Azərbaycan</p>
                <span>{hoverDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              </div>
              {hoverDropdown && (
                <ul className='dropdown'>
                  <li className='flex items-center gap-1'>
                    <img src={En} alt='English Flag' />
                    <span>English</span>
                  </li>
                  <li className='flex items-center gap-1'>
                    <img src={tr} alt='Turkish Flag' />
                    <span>Türkce</span>
                  </li>
                  <li className='flex items-center gap-1'>
                    <img src={Ru} alt='Russian Flag' />
                    <span>Русский</span>
                  </li>
                </ul>
              )}
            </div>
            <Link to='/login'>
              <button className='daxilbtn'>Daxil ol</button>
            </Link>
            <Link to='/register' className='registration'>
              <button>Qeydiyyat</button>
            </Link>
          </div>
          <div className='menu-icon' onClick={toggleMenu}>
            <IoMenu />
          </div>
        </nav>
      </section>
      <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <div>
          <img className='logo' src={logo} alt='logo' />
          <IoMdClose onClick={toggleMenu} /> {/* Ensure onClick is correctly linked */}
        </div>
        <p>
          Sevdiyin işlə məşğul ol,
          <br /> izləyicilərdən dəstək qazan!
        </p>
        <div className='language-content'>
          <img src={Az} alt='' />
          <p>Azərbaycan</p>
        </div>
        <ul>
          <li>
            <Link to={'/uzvlerimiz'}>Üzvlərimiz</Link>
          </li>
          <hr />
          <li>
            <Link to={'/blogs'}>Bloq</Link>
          </li>
          <hr />
          <li>
            <Link to={'/faq'}>FAQ</Link>
          </li>
        </ul>
        <div>
          <button className='daxilbtn'>Daxil ol</button>
          <button className='registration'>Qeydiyyat</button>
        </div>
        <p>BİZİ İZLƏYİN</p>
        <div className='menu-icons'>
          <IoLogoInstagram />
          <SlSocialFacebook />
        </div>
      </div>
    </>
  );
};

export default Navbar;
