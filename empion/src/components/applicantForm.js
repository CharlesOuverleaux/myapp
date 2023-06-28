import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

const ApplicantForm = ({ cultures, applicants, setApplicants }) => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
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
    const applicantData = {
      first_name: data.first_name,
      last_name: data.last_name,
      culture_type_id: parseInt(data.culture_type_id),
    };
    axios.post(`${API_URL}/applicants`, applicantData).then((response) => {
      setApplicants([...applicants, response.data]);
    });
  };

  return (
    <div>
      <h2>Applicants Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          name="first_name"
          placeholder="Add first name"
          onChange={handleChange}
          required
        />
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          name="last_name"
          placeholder="Add last name"
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
        <button type="submit">Add Applicant</button>
      </form>
    </div>
  );
};

export default ApplicantForm;
