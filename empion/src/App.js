import "./App.css";
import axios from "axios";
import Companies from "./components/companies";
import Applicants from "./components/applicants";
import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1";

function getCompanies() {
  return axios.get(API_URL + "/companies").then((response) => response.data);
}

function getApplicants() {
  return axios.get(API_URL + "/applicants").then((response) => response.data);
}

function App() {
  const [companies, setCompanies] = useState([]);
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    getCompanies().then((data) => setCompanies(data));
    getApplicants().then((data) => setApplicants(data));
  }, []);

  return (
    <div className="App">
      <h1>Empion</h1>
      <Companies companies={companies} />
      <Applicants applicants={applicants} />
    </div>
  );
}

export default App;
