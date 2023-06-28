import React from "react";

const Cultures = ({ cultures }) => {
  return (
    <div className="container p-6 mx-auto max-w-7xl lg:px-8">
      <div className="overflow-hidden rounded-md bg-white shadow">
        <p className="uppercase text-primary">Cultures</p>
        <ul className="divide-y divide-gray-200">
          {cultures.map((culture) => {
            return (
              <li key={culture.id}>
                <p className="px-6 py-4">{culture.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cultures;
