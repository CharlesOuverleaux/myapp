import "./App.css";
import axios from "axios";
import Companies from "./components/companies";
import Applicants from "./components/applicants";
import Cultures from "./components/cultures";
import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1";

async function fetchData(endpoint) {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function App() {
  const [companies, setCompanies] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [cultures, setCultures] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const companiesData = await fetchData("companies");
      const applicantsData = await fetchData("applicants");
      const culturesData = await fetchData("cultures");

      setCompanies(companiesData);
      setApplicants(applicantsData);
      setCultures(culturesData);
    };

    fetchDataAsync();
  }, []);

  return (
    <div className="App">
      <h1>Empion</h1>
      <Companies companies={companies} />
      <Applicants applicants={applicants} />
      <Cultures cultures={cultures} />
    </div>
  );
}

export default App;
