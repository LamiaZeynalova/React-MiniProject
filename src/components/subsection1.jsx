import React from 'react'
import kofealmaq from "../images/1_coffee-n.webp"
import kofeal from "../images/kofe-al-types.webp"

const SubSection = () => {
  return (
    <div>
        <div className="sub-section">
    <div className="sub-cards">
      <img src={kofealmaq} alt="Abune cards" className="cards-img"/>
    </div>
    
    <div className="sub-offer">
      <button className="offer-btn">Dəstək Al </button>
      <h2 className="offer-title">Bəxşiş qəbul edin</h2>
      <p className="offer-desc">
      Kofe.al işlərinizi bəyənən insanlardan dəstək mesajları 
      və bəxşiş almaq üçün unikal, əyləncəli və bəsit bir metodu təqdim edir!
       Kofealdan bəxşiş qutusu kimi istifadə edərək, dəstəkçilərinizin
       məşğuliyyətinizə töhfə verməsinə imkan verə bilərsiniz.
      </p>
      <img src={kofeal} alt="kofealteaps" className="ofeer-img"/>
    </div>
  </div>
  </div>
  )
}

export default SubSection