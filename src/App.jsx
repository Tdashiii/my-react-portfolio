import React from "react";
import "./index.css";
import Home from "./routes/Home.jsx";
import Project from "./routes/Project.jsx";
import Objective from "./routes/Objective.jsx";
import Skills from "./routes/Skills.jsx";


import { Route,Routes } from "react-router-dom";

function App() {
  return(
   <>
    <Home/>
   </>
  );
}

export default App;
