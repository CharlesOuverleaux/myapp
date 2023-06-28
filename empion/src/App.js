import "./App.css";
import React from "react";
import AppRouter from "./AppRouter";
import Nav from "./components/Nav";

// TODO: Add jest testing

function App() {
  return (
    <div className="App">
      <Nav />
      <AppRouter />
    </div>
  );
}

export default App;
