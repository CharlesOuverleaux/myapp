import "./App.css";
import Companies from "./components/companies";
import Applicants from "./components/applicants";
import Cultures from "./components/cultures";
import React, { useEffect, useState } from "react";
import CultureForm from "./components/cultureForm";
import CompanyForm from "./components/companyForm";
import ApplicantForm from "./components/applicantForm";
import Matches from "./components/matches";
import { fetchData } from "./helpers/fetchData";

function App() {
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
    <div className="App">
      <h1>Empion</h1>

      <Companies companies={companies} />
      <Applicants applicants={applicants} />
      <Cultures cultures={cultures} />
      <CultureForm cultures={cultures} setCultures={setCultures} />
      <CompanyForm
        cultures={cultures}
        companies={companies}
        setCompanies={setCompanies}
      />
      <ApplicantForm
        cultures={cultures}
        applicants={applicants}
        setApplicants={setApplicants}
      />
      <Matches matches={matches} />
    </div>
  );
}

export default App;
