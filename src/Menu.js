import React from 'react';
import { Link } from 'react-router-dom';


const Menu = ({menuItems}) => {
  return(
    <section className="menu-section">
      {menuItems.map((menuItem)=>{
        const{id,title,category,price,img,desc}=menuItem;

        return(
          <div className="menu-content" key={id}>
            <div className="menu-img">
              <img src={img} alt="" />
            </div>
            
            <div className="menu-title">
              <h3>{title}</h3>
              <div className="menu-price">
              <span>Price {price}</span>
            </div>
            </div>
            <div className="menu-category">
              <h4>{category}</h4>
            </div>
            
            <div className="menu-desc">
              <p>{desc}</p>
            </div>
            <div className="menu-readmore">
              <Link className="readmore">Read more</Link>
            </div>
          </div>
        )
      })}
    </section>
  );
};

export default Menu;
