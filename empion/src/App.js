import "./App.css";
import axios from "axios";
import Companies from "./components/companies";
import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1/companies";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getAPIData().then((data) => setCompanies(data));
  }, []);

  return (
    <div className="App">
      <h1>Hey</h1>
      <Companies companies={companies} />
    </div>
  );
}

export default App;
