import React from 'react';
import { Link } from 'react-router-dom';
import vebdizayn from "../images/web-design.jpg"
import incesenet from "../images/artist.webp"
import blog from "../images/arts.jpg"
import yazici from "../images/author.webp"
import qrafikdizayn from "../images/graphic-design.jpg"
import musiqi from "../images/musician.webp"
import sexsiinkisaf from "../images/personal-development.jpg"
import idman from "../images/Sport.webp"

const Links = () => {
  const categories = [
    { name: 'Veb dizayn', path: '/cratos/web-design', imageUrl: vebdizayn ,count:133 },
    { name: 'Qrafik dizayn', path: '/cratos/graphic-design', imageUrl: qrafikdizayn ,count:155},
    { name: 'Şəxsi inkişaf', path: '/cratos/personal-development', imageUrl: sexsiinkisaf,count:322 },
    { name: 'Yazıçılıq', path: '/cratos/writing', imageUrl: yazici ,count:147},
    { name: 'İncəsənət', path: '/cratos/art', imageUrl: incesenet,count:176 },
    { name: 'Blog', path: '/cratos/blog', imageUrl: blog,count:322 },
    { name: 'İdman', path: '/cratos/sports', imageUrl: idman ,count:101},
    { name: 'Musiqi', path: '/cratos/music', imageUrl: musiqi ,count:95},
  ];

  return (
    <div className="category-container">
      {categories.map(category => (
       <Link to={category.path} className="linkss" key={category.name} style={{ backgroundImage: `url(${category.imageUrl})` }}>
       <div className="category-text">{category.name}</div>
       <div className="category-hover-content">
         <span className="category-creative">{category.count}Yaradıcı</span>
         <span className="category-icon">→</span>
       </div>
     </Link>
      ))}
    </div>
  );
}

export default Links;
