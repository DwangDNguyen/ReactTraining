import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [currentPerson, setCurrentPerson] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      if (currentPerson === people.length - 1) {
        setCurrentPerson(0);
      } else {
        setCurrentPerson(currentPerson + 1);
      }
    }, 5000);
    return () => clearInterval(slider);
  }, [currentPerson]);

  return (
    <section className="section">
      <div className="title">
        <h2>Reviews</h2>
      </div>
      <div className="section-center">
        {people.map((person, personPosition) => {
          let position = "nextSlide";
          if (personPosition === currentPerson) {
            position = "activeSlide";
          }
          if (
            personPosition === currentPerson - 1 ||
            (currentPerson === 0 && personPosition === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={person.id}>
              <img
                src={person.image}
                alt={person.name}
                className="person-img"
              />
              <h4>{person.name}</h4>
              <p className="title">{person.title}</p>
              <p className="text">{person.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button
          className="prev"
          onClick={() => {
            if (currentPerson === 0) {
              setCurrentPerson(people.length - 1);
            } else {
              setCurrentPerson(currentPerson - 1);
            }
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            if (currentPerson === people.length - 1) {
              setCurrentPerson(0);
            } else {
              setCurrentPerson(currentPerson + 1);
            }
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
