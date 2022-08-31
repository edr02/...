import React from "react";
import TextInput from "../TextInput";
import "./Desktop1.css";

function Desktop1(props) {
  const {
    rspLogo1,
    line1,
    sfondo_Schermata_Passerelle1,
    sfondo_Schermata_Passerelle2,
    sfondo_Schermata_Passerelle3,
    title,
    sfondo_Schermata_Plancette1,
    plancetta,
    sfondo_Schermata_Plancette3,
    sfondo_Schermata_Plancette2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1 screen">
        <div className="flex-col">
          <div className="overlap-group">
            <div className="flex-row">
              <img className="rsp-logo-1" src={rspLogo1} />
              <TextInput />
            </div>
            <img className="line-1" src={line1} />
          </div>
          <div className="sfondo_schermata_passerelle-container">
            <img className="sfondo_schermata_passerelle-1 animate-enter" src={sfondo_Schermata_Passerelle1} />
            <img className="sfondo_schermata_passerelle-2 animate-enter1" src={sfondo_Schermata_Passerelle2} />
            <img className="sfondo_schermata_passerelle-3 animate-enter2" src={sfondo_Schermata_Passerelle3} />
          </div>
          <h1 className="title inter-normal-black-24px">{title}</h1>
        </div>
        <div className="flex-row-1">
          <div className="plancett-container">
            <img className="sfondo_schermata_plancette-1" src={sfondo_Schermata_Plancette1} />
            <div className="plancetta inter-normal-black-24px">{plancetta}</div>
          </div>
          <img className="sfondo_schermata_plancette-3" src={sfondo_Schermata_Plancette3} />
          <img className="sfondo_schermata_plancette-2" src={sfondo_Schermata_Plancette2} />
        </div>
      </div>
    </div>
  );
}

export default Desktop1;
