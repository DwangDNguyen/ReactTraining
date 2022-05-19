import React from "react";
import data from "./data";

const List = () => {
  const datas = data.map((item) => {
    return (
      <article key={item.id} className="person">
        <img src={item.image} alt={item.name}></img>
        <div>
          <h4>{item.name}</h4>
          <p>{item.age} year</p>
        </div>
      </article>
    );
  });

  return <React.Fragment>{datas}</React.Fragment>;
};

export default List;
