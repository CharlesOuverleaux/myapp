import React from "react";

const Companies = ({ companies }) => {
  return (
    <div className="container p-6 mx-auto max-w-7xl lg:px-8">
      <div className="overflow-hidden rounded-md bg-white shadow">
        <p className="uppercase text-primary">Companies</p>
        <ul className="divide-y divide-gray-200">
          {companies.map((company) => {
            return (
              <li key={company.id} className="px-6 py-4">
                <p>{company.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Companies;
