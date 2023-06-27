import React from "react";

const CultureForm = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <h2>Culture Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Add a culture e.g. Modern"
          onChange={handleChange}
        />
        <button type="submit">Add Culture</button>
      </form>
    </div>
  );
};

export default CultureForm;
