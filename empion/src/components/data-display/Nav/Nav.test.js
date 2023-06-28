import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "./Nav";

test("renders navigation links", () => {
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );

  const homeLink = screen.getByRole("link", { name: /home/i });
  const companiesLink = screen.getByRole("link", { name: /companies/i });
  const applicantsLink = screen.getByRole("link", { name: /applicants/i });
  const culturesLink = screen.getByRole("link", { name: /cultures/i });
  const matchesLink = screen.getByRole("link", { name: /start matches/i });

  expect(homeLink).toBeInTheDocument();
  expect(companiesLink).toBeInTheDocument();
  expect(applicantsLink).toBeInTheDocument();
  expect(culturesLink).toBeInTheDocument();
  expect(matchesLink).toBeInTheDocument();
});
