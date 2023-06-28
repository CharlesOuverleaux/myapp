import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Cultures from "./components/data-display/cultures";
import CultureForm from "./components/forms/cultureForm";
import Companies from "./components/data-display/companies";
import CompanyForm from "./components/forms/companyForm";
import Applicants from "./components/data-display/applicants";
import ApplicantForm from "./components/forms/applicantForm";
import { fetchData } from "./helpers/fetchData";
import Matches from "./components/data-display/matches";

function AppRouter() {
  const [companies, setCompanies] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [cultures, setCultures] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const companiesData = await fetchData("companies");
      const applicantsData = await fetchData("applicants");
      const culturesData = await fetchData("cultures");
      const matchesData = await fetchData("matches");

      setCompanies(companiesData);
      setApplicants(applicantsData);
      setCultures(culturesData);
      setMatches(matchesData);
    };

    fetchDataAsync();
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/companies"
        element={
          <>
            <CompanyForm
              cultures={cultures}
              companies={companies}
              setCompanies={setCompanies}
            />
            <Companies companies={companies} />
          </>
        }
      />
      <Route
        exact
        path="/cultures"
        element={
          <>
            <CultureForm cultures={cultures} setCultures={setCultures} />
            <Cultures cultures={cultures} />
          </>
        }
      />
      <Route
        exact
        path="/applicants"
        element={
          <>
            <ApplicantForm
              cultures={cultures}
              applicants={applicants}
              setApplicants={setApplicants}
            />
            <Applicants applicants={applicants} />
          </>
        }
      />
      <Route
        exact
        path="/matches"
        element={
          <Matches
            matches={matches}
            companies={companies}
            applicants={applicants}
          />
        }
      />
    </Routes>
  );
}

export default AppRouter;
