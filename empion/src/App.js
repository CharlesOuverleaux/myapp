import "./App.css";
import axios from "axios";
import Companies from "./components/companies";
import Applicants from "./components/applicants";
import Cultures from "./components/cultures";
import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1";

function getCompanies() {
  return axios.get(API_URL + "/companies").then((response) => response.data);
}

function getApplicants() {
  return axios.get(API_URL + "/applicants").then((response) => response.data);
}

function getCultures() {
  return axios.get(API_URL + "/cultures").then((response) => response.data);
}

function App() {
  const [companies, setCompanies] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [cultures, setCultures] = useState([]);

  useEffect(() => {
    getCompanies().then((data) => setCompanies(data));
    getApplicants().then((data) => setApplicants(data));
    getCultures().then((data) => setCultures(data));
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
