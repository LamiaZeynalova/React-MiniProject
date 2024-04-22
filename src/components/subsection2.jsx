import React from 'react';
import orxanshop from "../images/2-shop.webp";

const SubSection2 = () => {

    
    
      return (
        <div>
        <div className="sub2-section">
    <div className="sub-offer">
      <button className="offer-btn">ONLAYN MAĞAZA</button>
      <h2 className="offer-title">Məhsul və Xidmətlərinizi satın</h2>
      <p className="offer-desc">
      Kofe.al Mağazanızı açaraq, dərhal rəqəmsal və ya fiziki əşyalar əlavə edin. Heç bir abunə və ya aktivləşdirmə haqqı yoxdur. 
      Sadəcə məhsul və ya xidmətlərinizi yerləşdirərək, dərhal satışa başlayın!
      </p>
      <h5 className="offer1-title">Nə satmaq olar?:</h5>
      <ul className="list">
             <li>Fiziki məhsul</li>
              <li>Xidmət</li>
              <li>Digital məhsul</li>
              <li>Affiliate məhsul</li>
              <li>Tədbirə giriş</li>
              <li>Çap işləri</li>
            </ul>
    </div>
    <div className="sub-cards">
      <img src={orxanshop} alt="shop-card" className="cards-img"/>
    </div>
  </div>
  </div>
  )
}
        // <section className="section">
        //   <div className="content">
        //     <button className="btn">ONLAYN MAĞAZA</button>
        //     <h2 className="title">Məhsul və Xidmətlərini satın</h2>
        //     <p className="desc">
        //       Kofe.al Mağazanızı açaraq, dərhal rəqəmsal və ya fiziki əşyalar əlavə edin.
        //       Heç bir abunə və ya aktivləşdirmə haqqı yoxdur. Sadəcə məhsul
        //       və ya xidmətlərinizi yerləşdirərək, dərhal satışa başlayın!
        //     </p>
        //     <ul className="list">
        //       <li>Fiziki məhsul</li>
        //       <li>Xidmət</li>
        //       <li>Digital məhsul</li>
        //       <li>Affiliate məhsul</li>
        //       <li>Tədbirə giriş</li>
        //       <li>Çap işləri</li>
        //     </ul>
        //   </div>
        //   <div className="img-container">
        //     <img src={orxanshop} alt="Orxan's Shop" className="shop-img" />
        //   </div>
    //     // </section>
    //   );
    // }
    
    
    
export default SubSection2;
