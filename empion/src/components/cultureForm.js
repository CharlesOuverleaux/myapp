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
    <div>
      <h2>Culture Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Add a culture e.g. Modern"
          required
        />
        <button type="submit">Add Culture</button>
      </form>
    </div>
  );
};

export default CultureForm;
