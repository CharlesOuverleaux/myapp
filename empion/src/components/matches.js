import React from "react";
import { getCompanyData } from "../helpers/getCompanyData";
import { getApplicantData } from "../helpers/getApplicantData";

const Matches = ({ matches, companies, applicants }) => {
  return (
    <div>
      <p>Matches Table</p>
      {matches.map((match) => {
        return (
          <div key={match.id}>
            <p>
              {getCompanyData(companies, match.company_id).name} -{" "}
              {getApplicantData(applicants, match.applicant_id).last_name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Matches;
