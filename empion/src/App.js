import "./App.css";
import React from "react";
import AppRouter from "./AppRouter";
import Nav from "./components/Nav";

// TODO: Style components (tailwind?)
// TODO: Add jest testing
// TODO: Add typescript

function App() {
  return (
    <div className="App">
      <Nav />
      <AppRouter />
    </div>
  );
}

export default App;
