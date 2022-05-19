import React from "react";

const Categories = ({ filterItems, categories }) => {
  console.log(filterItems);

  const categoryItems = categories.map((category, index) => {
    return (
      <button
        className="filter-btn"
        key={index}
        onClick={() => filterItems(category)}
      >
        {category}
      </button>
    );
  });
  return <div className="btn-container">{categoryItems}</div>;
};

export default Categories;
