import React from "react";

const Companies = ({ companies }) => {
  return (
    <div>
      <p>Companies</p>
      {companies.map((company) => {
        return (
          <div key={company.id}>
            <h1>{company.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Companies;
