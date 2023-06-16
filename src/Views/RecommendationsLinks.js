import { Button, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import AllExternalDocuments from "../Components/AllExternalDocuments";

import AllRecommendations from "../Components/AllRecommendations";

import CClogo from "../styles/CClogo.png";

function RecommendationsLinks() {
  return (
    <div className="QCardDiv">
      <h1 className="AreaHeading">HOUSING</h1>
      <AllRecommendations />
      <AllExternalDocuments />

      <div>
        <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default RecommendationsLinks;
