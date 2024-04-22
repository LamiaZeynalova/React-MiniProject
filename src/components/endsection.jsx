import React from 'react';
import '../pages/home/new.css'
import { Link} from 'react-router-dom'

const EndSection = () => {
  return (
    <section className="hero-section">
      <div className="content-container">
        <h1>Yaradıcı Şəxslər üçün unikal dəstək platforma.</h1>
        <p>Yarat 🎨 Paylaş 💌 Qazan 💰</p>
        <Link to="/register"><button className="endbutton">Qeydiyyat</button></Link>
      </div>
    </section>
  );
};

export default EndSection;
