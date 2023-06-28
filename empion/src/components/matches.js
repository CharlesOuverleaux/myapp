import React from "react";

const Matches = ({ matches }) => {
  return (
    <div>
      <p>Matches</p>
      {matches.map((match) => {
        return (
          <div key={match.id}>
            <p>
              {match.company_id} - {match.applicant_id}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Matches;
