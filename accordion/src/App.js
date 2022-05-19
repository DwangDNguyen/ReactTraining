import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const datas = data.map((item) => {
    return <SingleQuestion key={item.id} {...item} />;
  });
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">{datas}</section>
      </div>
    </main>
  );
}

export default App;
