import "./App.css";
import React from "react";
import AppRouter from "./AppRouter";
import Nav from "./components/data-display/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <AppRouter />
    </div>
  );
}

export default App;
