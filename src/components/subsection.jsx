import React from 'react'
import abune from "../images/3-membership.webp"

const SubSection = () => {
  return (
    <div>
        <div className="sub-section">
    <div className="sub-cards">
      <img src={abune} alt="Abune cards" className="cards-img"/>
    </div>
    
    <div className="sub-offer">
      <button className="offer-btn">Abunə ol</button>
      <h2 className="offer-title">Abunelik təklif edin</h2>
      <p className="offer-desc">
        Aylıq abunelik kanalı yaradaraq, izləyicilərinizin eksklüziv üzvlərlə 
        çevrilməsinə imkan yaradın ki, sizə hər ay müxtəlif qiymət 
        dərəcələrində dəstək ola bilsinlər.
        Rollar, eksklüziv kontent və ya fiziki əşyalar kimi unikal hədiyyələrlə üzvləri mükafatlandırın.
      </p>
    </div>
  </div>
  </div>
  )
}

export default SubSection