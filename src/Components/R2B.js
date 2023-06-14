import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import Card from "@mui/material/Card";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import Retrofit from "../styles/Retrofit.jpeg";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function R2B() {
  const [expanded, setExpanded] = useState(false);
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectResults("/Results");
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = (e) => {
    console.log(e);
    setExpanded(!expanded);
  };

  const expandAccordeon = (e) => {
    console.log(e);
    setExpanded(!expanded);
  };

  return (
    <div className="QCardDiv">
      <h1 className="AreaHeading">HOUSING</h1>
      <div>
        <Card className="QCardFullRecommendation">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={Retrofit}
              alt="retrofityourhome"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="QCardRecommendationTitle"
              >
                Upgrade to heat pump
              </Typography>
              <Typography
                sx={{ mb: 2 }}
                color="text.secondary"
                className="QSubTitleFullRecommendation"
              >
                Biggest Impact
              </Typography>

              <Typography variant="body2" className="RecommendationFullText">
                Electric powered high-efficiency heat pumps transfer heat from a
                cold space to a hot one. So in winter, the pump transfers energy
                from the outside to inside of the building and in summer it
                pumps hot air from the inside to the outside. Heat pumps can
                replace conventional heating, air conditioning and ventilation
                systems – and reduce fossil fuel consumption and greenhouse gas
                emissions like that. If you live in a place with cold winters,
                you might have to insulate your home first.
              </Typography>
            </CardContent>

            <div className="FullRecommendationBackButtonDiv">
              {" "}
              <Button size="small" onClick={handlePrev}>
                Back
              </Button>
            </div>
          </Card>
        </Card>
      </div>
      <div>
        <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default R2B;
