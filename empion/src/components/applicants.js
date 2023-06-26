import React from "react";

const Applicants = ({ applicants }) => {
  console.log(applicants);
  return (
    <div>
      <p>Applicants</p>
      {applicants.map((applicant) => {
        return (
          <div key={applicant.id}>
            <h1>{applicant.last_name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Applicants;
