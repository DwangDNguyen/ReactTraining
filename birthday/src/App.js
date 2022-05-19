import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [birthday, setBirthday] = useState(true);
  function Clear() {
    setBirthday(false);
  }
  return (
    <main>
      <section className="container">
        <h3>{birthday ? "5" : "0"} birthday today</h3>
        {birthday ? <List /> : ""}
        <button onClick={() => Clear()}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
