import React, { useState } from 'react';


const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "Kofe.al nədir?", answer: "Kofe.al, paraştıkarlarınızdan birbaşa gəlir əldə etməyiniz üçün ən sadə yoldur. Siz baxışlar qəbul edə, üzvlük səviyyələri yarada, onlayn mağaza açıq və 9% platforma haqqı ilə komissiya ala bilərsiniz." },
    { question: "Kofe.al kimlər üçündür?", answer: "Sənətkarlar, Rəssamlar, Streamerlər, Podkastçılar, Yazıçılar, Fotoqraflar, Kinorejissorlar, İnfluencerlər və hər cür yaradıcı şəxslər Kofe.al-dan istifadə edirlər." },
    { question: "Ödənişi necə alacağam?", answer: "Bəxşiş ödənişləri növbəti gün sizin bank kartınıza köçürüləcək. Məhsul və xidmət satışından əldə edilən gəlirlər isə VÖEN-li bank hesabınıza köçürülür. Bu qədər sadə!" },
    { question: " Xidmət haqqı nə qədərdir?", answer: "Biz bütün əməliyyat haqları və komissiyamız daxil olmaqla 9% komissiya alırıq." },
    { question: "Ödənilən vəsaitlər ilə kofe almalıyam?", answer: "beli" },
    { question: "Kofe.al ilə nə qədər qazana bilərəm? ", answer: "Hər şey sizin izləyici və pərəstişkarlarınız ilə münasibət və kommunikasiyadan asılıdır. Kofe.al olaraq toplanacaq məbləğə heç bir limit tətbiq etmirik. Yetər ki, siz yaradın, paylaşın, satın və qazanın." },
    { question: " Kofe.al xarici analoqlardan fərqi nədir?", answer: "Patreon, BMC, Ko-fi kimi xarici analoqlardan əsas fərqimiz həm yaradıcı şəxslərn, həm də pərəstişkarlar üçün verdiyi üstünlüklər və dil seçimidir. Yaradıcı şəxslər xarici analoqlardan ödənişləri almaq üçün Azərbaycanda aktiv olmayan PayPal və Stripe kimi platformalardan ödənişləri almaq məcburiyyətindədilər. Pərəstişkarlar isə xarici ödəniş sistemləri ilə ödəniş etdiklərində əlavə 18% ƏDV vergisi ödəmək məcburiyyətində qaldıqlarından, ödəmələrin miqdarı daha az olur. Kofe.al ilə isə əlavə komissiya olmadan, yerli bank kartınıza ödəniş ala bilərsiniz." },
    { question: "Xarici pərəstişkarlarımdan bəs ödəniş ala bilərəm?", answer: "Bəli, biz stripe və PayPal ilə də ödənişlər alaraq, sizin hesabınıza köçürə bilərik. Hazırda bu xidmət üzərində işlər aparılır və komissiya dərəcələri təyin edildikdən sonra, təqdim ediləcək." },
    { question: "Kofe.al kimindir?", answer: "Kofe.al layihəsi ABŞ-da qeydiyyatdan keçmiş BonPara Inc. şirkətinin Azərbaycandakı nümayəndəliyi olan BonPara MMC şirkətinin layihəsidir. Komanda və şirkətimiz 500 Global Akselerasiya proqramının məzunu və bir çox startup müsabiqələrin qalibidir." },
    { question: "Sizin xeyriniz nədir?", answer: "BonPara olaraq şirkətimiz e-ticarət, onlayn ödənişlər və loyallıq proqramı üzrə müxtəlif həllər üzərində çalışır. Kofe.al bizim ilk sub layihəmizdir." },

  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
     <div className='faq-section'>
     {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default FaqSection;
