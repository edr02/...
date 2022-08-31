import "./App.css";
import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop1 from "./Desktop1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:path(|desktop-1)">
          <Desktop1 {...desktop1Data} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
const desktop1Data = {
    rspLogo1: "/img/rsp-logo-1@2x.png",
    line1: "/img/line-1@1x.png",
    sfondo_Schermata_Passerelle1: "/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle2: "/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle3: "/img/sfondo-schermata-passerelle-1@2x.png",
    title: "Passerella",
    sfondo_Schermata_Plancette1: "/img/sfondo-schermata-plancette-1@2x.png",
    plancetta: "Plancetta",
    sfondo_Schermata_Plancette3: "/img/sfondo-schermata-plancette-1@2x.png",
    sfondo_Schermata_Plancette2: "/img/sfondo-schermata-plancette-1@2x.png",
};