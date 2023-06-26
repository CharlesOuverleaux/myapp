import React from "react";

const Cultures = ({ cultures }) => {
  return (
    <div>
      <p>Cultures</p>
      {cultures.map((culture) => {
        return (
          <div key={culture.id}>
            <h1>{culture.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cultures;
