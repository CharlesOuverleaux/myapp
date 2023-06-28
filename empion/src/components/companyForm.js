import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

const CompanyForm = ({ cultures, companies, setCompanies }) => {
  const [data, setData] = useState({
    name: "",
    culture_type_id: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const companyData = {
      name: data.name,
      culture_type_id: parseInt(data.culture_type_id),
    };
    axios.post(`${API_URL}/companies`, companyData).then((response) => {
      setCompanies([...companies, response.data]);
    });
  };

  return (
    <div>
      <h2>Company Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Add a company name e.g. Google"
          onChange={handleChange}
          required
        />
        <label htmlFor="culture_type_id">Culture</label>
        <select
          name="culture_type_id"
          value={data.culture_type_id}
          onChange={handleChange}
        >
          {cultures.map((culture) => {
            return (
              <option key={culture.id} value={culture.id}>
                {culture.name}
              </option>
            );
          })}
        </select>
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
};

export default CompanyForm;
