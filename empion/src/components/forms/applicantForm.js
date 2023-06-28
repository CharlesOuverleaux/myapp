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
    <div className="container p-6 mx-auto max-w-7xl lg:px-8">
      <h2 className="uppercase text-primary">Add an applicant</h2>
      <form
        onSubmit={handleSubmit}
        className="overflow-hidden rounded-md bg-white shadow py-4"
      >
        <div className="p-4">
          <label htmlFor="first_name" className="px-3.5 py-2.5">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            placeholder="Add first name"
            className="rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            onChange={handleChange}
            required
          />
          <label htmlFor="last_name" className="px-3.5 py-2.5">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            placeholder="Add last name"
            className="rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            onChange={handleChange}
            required
          />
          <label htmlFor="culture_type_id" className="px-3.5 py-2.5">
            Culture
          </label>
          <select
            name="culture_type_id"
            value={data.culture_type_id}
            onChange={handleChange}
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm opacity-80 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {cultures.map((culture) => {
              return (
                <option key={culture.id} value={culture.id}>
                  {culture.name}
                </option>
              );
            })}
          </select>
        </div>
        <button
          type="submit"
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm opacity-80 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Add Applicant
        </button>
      </form>
    </div>
  );
};

export default ApplicantForm;
