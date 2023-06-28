import React from "react";
import { getCompanyData } from "../helpers/getCompanyData";
import { getApplicantData } from "../helpers/getApplicantData";

const Matches = ({ matches, companies, applicants }) => {
  return (
    <div className="container p-6 mx-auto max-w-7xl lg:px-8">
      <div className="overflow-hidden rounded-md bg-white shadow">
        <p className="uppercase text-primary">Matches Table</p>
        <ul className="divide-y divide-gray-200">
          {matches.map((match) => {
            return (
              <li key={match.id}>
                <p className="px-6 py-4">
                  {getCompanyData(companies, match.company_id).name} -{" "}
                  {getApplicantData(applicants, match.applicant_id).last_name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Matches;
