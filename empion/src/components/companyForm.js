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
    <div className="container p-6 mx-auto max-w-7xl lg:px-8">
      <h2>Add a company</h2>
      <form
        onSubmit={handleSubmit}
        className="overflow-hidden rounded-md bg-white shadow py-4"
      >
        <div className="p-4">
          <label htmlFor="name" className="px-3.5 py-2.5">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Add a company name"
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
          Add company
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;
