import React from "react";
import { useParams,Link } from "react-router-dom";

export const Single = ({ menuItems }) => {
  const { single } = useParams();
  const filteredItems = menuItems.filter(
    (menuItem) => single === menuItem.title
  );
  return (
    <section className="single.sec">
      <div className="sec-container">
        {filteredItems.map((filterItem) => {
          const { id, title, category, price, img, desc } = filterItem;
          return (
            <div className="menu-content" key={id}>
              <div className="menu-img">
                <img src={img} alt="" />
                <div className="menu-title">
                <h1>{title}</h1>
                <div className="menu-price">
                  <span>Price {price}</span>
                </div>
              </div>
              </div>
              <div className="menu-category">
                <h4>{category}</h4>
              </div>
              <div className="menu-desc">
                <p>{desc}</p>
              </div>
              <div className="menu-readmore">
                <Link to="/" className="readmore">
                 go back
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
