import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const fetchTabs = async () => {
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      setTabs(jobs);
      console.log(jobs);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchTabs();
  }, []);
  const tabsList = tabs.map((item) => item.company);
  console.log(tabsList);

  function TabsDisplay() {
    const tabItems = tabsList.map((item, index) => {
      return (
        <button
          className={`job-btn ${index === value && "active-btn"}`}
          key={index}
          onClick={() => {
            setValue(index);
          }}
        >
          {item}
        </button>
      );
    });
    return <div className="btn-container">{tabItems}</div>;
  }
  console.log(tabs[value]);

  return (
    <main>
      {loading ? (
        <h1 className="section loading">Loading...</h1>
      ) : (
        <section className="section">
          <div className="title">
            <h2>experience</h2>
            <div className="underline"></div>
          </div>
          <div className="jobs-center">
            <TabsDisplay />
            <article className="job-info">
              <h3>{tabs[value].title}</h3>
              <h4>{tabs[value].company}</h4>
              <p className="job-date">{tabs[value].dates}</p>
              {tabs[value].duties.map((item, index) => {
                return (
                  <div className="job-desc" key={index}>
                    <FaAngleDoubleRight className="job-icon" />
                    <p>{item}</p>
                  </div>
                );
              })}
            </article>
          </div>
          <button type="button" className="btn">
            more info
          </button>
        </section>
      )}
    </main>
  );
}

export default App;
