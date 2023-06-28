import React from "react";

const Applicants = ({ applicants }) => {
  return (
    <div className="container p-6 mx-auto max-w-7xl lg:px-8">
      <div className="overflow-hidden rounded-md bg-white shadow">
        <p className="uppercase text-primary">Applicants</p>
        <ul className="divide-y divide-gray-200">
          {applicants.map((applicant) => {
            return (
              <li key={applicant.id}>
                <p className="px-6 py-4">{applicant.last_name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Applicants;
