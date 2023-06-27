import "./App.css";
import axios from "axios";
import Companies from "./components/companies";
import Applicants from "./components/applicants";
import Cultures from "./components/cultures";
import React, { useEffect, useState } from "react";
import CultureForm from "./components/cultureForm";

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

  const handleChange = (e) => {
    e.preventDefault();
    console.log("changing", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cultureName = e.target.name.value;
    console.log("submitting", cultureName);
    axios
      .post(`${API_URL}/cultures`, { name: cultureName })
      .then((response) => {
        setCultures([...cultures, response.data]);
      });
  };

  return (
    <div className="App">
      <h1>Empion</h1>
      <Companies companies={companies} />
      <Applicants applicants={applicants} />
      <Cultures cultures={cultures} />
      <CultureForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
