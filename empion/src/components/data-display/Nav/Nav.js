import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="flex justify-center gap-4 p-4 text-primary font-bold">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/companies">Companies</Link>
      </li>
      <li>
        <Link to="/applicants">Applicants</Link>
      </li>
      <li>
        <Link to="/cultures">Cultures</Link>
      </li>
      <li>
        <Link to="/matches">Start matches</Link>
      </li>
    </ul>
  );
};

export default Nav;
