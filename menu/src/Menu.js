import React from "react";

const Menu = ({ menu }) => {
  const menuItems = menu.map((item) => {
    const { title, category, price, img, desc } = item;
    return (
      <article className="menu-item">
        <img src={img} alt={title} className="photo" />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">${price}</h4>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    );
  });
  return <div className="section-center">{menuItems}</div>;
};

export default Menu;
