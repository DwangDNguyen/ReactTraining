import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const menuCategories = [
    "All",
    ...new Set(items.map((item) => item.category)),
  ];
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(menuCategories);

  console.log(categories);
  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menu={menuItems} />
      </section>
    </main>
  );
}

export default App;
