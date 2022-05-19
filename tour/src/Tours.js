import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  const tour = tours.map((tour) => {
    return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
  });
  console.log(tour);
  return (
    <section>
      <div clasName="title">
        <h2>Our tours</h2>
        <div clasName="underline"></div>
      </div>
      <div>{tour}</div>
    </section>
  );
};

export default Tours;
