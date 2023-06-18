import { Button, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import R1 from "./R1";
import R2 from "./R2";
import R3 from "./R3";
import R4 from "./R4";
import R5 from "./R5";
import R6 from "./R6";
import R7 from "./R7";
import R8 from "./R8";
import R9 from "./R9";
import R10 from "./R10";
import R11 from "./R11";
import R12 from "./R12";
import { Link, useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";

function AllExternalDocuments() {
  const redirectResults = useNavigate();
  const handleResults = () => {
    redirectResults("/Results");
  };

  return (
    <div>
      <Card className="QCardExternalLinks">
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="QTitleRecommendations"
          >
            External Resources
          </Typography>
          <div className="CardExternalLinksDiv">
            <Card className="CardExternalLinks">
              <a
                href="https://changeclubs.global/housing/"
                target="_blank"
                rel="noreferrer"
                className="RecommendationCardLink"
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 9 }}
                    color="text.secondary"
                    gutterBottom
                    className="QCardRecommendationType"
                  >
                    Housing
                  </Typography>
                  <Typography
                    component="div"
                    className="QCardRecommendationTitle"
                  >
                    Housing Module
                  </Typography>
                  <Typography
                    sx={{ mb: 1 }}
                    color="text.secondary"
                    className="QCardRecommendationSubTitle"
                  >
                    Change Clubs
                  </Typography>
                </CardContent>
              </a>
            </Card>
            <Card className="CardExternalLinks">
              <a
                href="https://drawdown.org/sectors/buildings"
                target="_blank"
                rel="noreferrer"
                className="RecommendationCardLink"
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 9 }}
                    color="text.secondary"
                    gutterBottom
                    className="QCardRecommendationType"
                  >
                    Housing
                  </Typography>
                  <Typography
                    component="div"
                    className="QCardRecommendationTitle"
                  >
                    Impacts of Buildings
                  </Typography>
                  <Typography
                    sx={{ mb: 1 }}
                    color="text.secondary"
                    className="QCardRecommendationSubTitle"
                  >
                    Project Drawdown
                  </Typography>
                </CardContent>
              </a>
            </Card>
            <Card className="CardExternalLinks">
              <a
                href="https://single-market-economy.ec.europa.eu/industry/sustainability/buildings-and-construction_en"
                target="_blank"
                rel="noreferrer"
                className="RecommendationCardLink"
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 9 }}
                    color="text.secondary"
                    gutterBottom
                    className="QCardRecommendationType"
                  >
                    Housing
                  </Typography>
                  <Typography
                    component="div"
                    className="QCardRecommendationTitle"
                  >
                    Buildings and construction
                  </Typography>
                  <Typography
                    sx={{ mb: 1 }}
                    color="text.secondary"
                    className="QCardRecommendationSubTitle"
                  >
                    European Commission
                  </Typography>
                </CardContent>
              </a>
            </Card>
            <Card className="CardExternalLinks">
              <a
                href="https://www.unep.org/news-and-stories/press-release/co2-emissions-buildings-and-construction-hit-new-high-leaving-sector"
                target="_blank"
                rel="noreferrer"
                className="RecommendationCardLink"
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 9 }}
                    color="text.secondary"
                    gutterBottom
                    className="QCardRecommendationType"
                  >
                    Housing
                  </Typography>
                  <Typography
                    component="div"
                    className="QCardRecommendationTitle"
                  >
                    CO2 emissions from buildings
                  </Typography>
                  <Typography
                    sx={{ mb: 1 }}
                    color="text.secondary"
                    className="QCardRecommendationSubTitle"
                  >
                    United Nations
                  </Typography>
                </CardContent>
              </a>
            </Card>
          </div>
        </CardContent>
      </Card>
      {/* <div className="ButtonBackRecommendationsDiv">
        <button
          className="ButtonBackRecommendations"
          size="small"
          onClick={handleResults}
        >
          BACK
        </button>
      </div> */}
    </div>
  );
}

export default AllExternalDocuments;
