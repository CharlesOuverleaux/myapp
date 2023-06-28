import React from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

const CultureForm = ({ cultures, setCultures }) => {
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
    <div className="container p-6 mx-auto max-w-7xl lg:px-8">
      <h2 className="uppercase text-primary">Add a culture</h2>
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
            placeholder="e.g. Modern"
            className="rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm opacity-80 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Add Culture
        </button>
      </form>
    </div>
  );
};

export default CultureForm;
