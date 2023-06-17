import { Button, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import { useNavigate } from "react-router-dom";
import AllExternalDocuments from "../Components/AllExternalDocuments";

import AllRecommendations from "../Components/AllRecommendations";

import CClogo from "../styles/CClogo.png";

function RecommendationsLinks() {
  const redirectResults = useNavigate();
  const handleResults = () => {
    redirectResults("/Results");
  };
  return (
    <div className="QCardDivRecommendationsLinks">
      <h1 className="AreaHeading">HOUSING</h1>
      <AllRecommendations />
      <AllExternalDocuments />
      <div className="ButtonBackRecommendationsDiv ">
        <button
          className="ButtonBackRecommendations"
          size="small"
          onClick={handleResults}
        >
          BACK
        </button>
      </div>
      <div>
        <a
          href="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </a>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default RecommendationsLinks;
