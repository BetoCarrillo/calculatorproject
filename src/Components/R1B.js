import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import Retrofit from "../styles/Retrofit.jpeg";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ResultsContext } from "../Context/context";

function R1B() {
  const { setInputQ1, inputQ1, inputQ5 } = useContext(ResultsContext);
  const [expanded, setExpanded] = useState(false);
  const redirectResults = useNavigate();

  console.log("inputQ1", inputQ1);

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
                className="QTitleFullRecommendation"
              >
                Insulate your home
              </Typography>
              <Typography
                sx={{ mb: 2 }}
                color="text.secondary"
                className="QSubTitleFullRecommendation"
              >
                Biggest Impact
              </Typography>

              <Typography variant="body2" className="RecommendationFullText">
                Insulation is one of the most cost-efficient ways to make your
                home energy efficient, keeping a healthy indoor temperature.
                Insulating your home will not only reduce your impact on the
                climate, it will also help you save costs in the long term.{" "}
                <br></br> <br></br>
                The main ways buildings lose energy and heat are:
                <br></br>
                <br></br>
              </Typography>
              {inputQ5.toString() === "Doors & windows " ? (
                <div className="DisableRecommendation"></div>
              ) : (
                <div>
                  {" "}
                  <Typography
                    sx={{ mb: 2 }}
                    color="text.secondary"
                    className="QInsulationsDiv"
                  >
                    Doors and Windows
                  </Typography>
                  <Typography variant="body2" className="InsulationFullText">
                    If your windows and doors are in a good condition, a weather
                    strip or rubber sealing can go a long way. If your windows
                    are more than 10 years old, you can consider changing them
                    to energy-efficient windows. There are double or triple-pane
                    types.
                  </Typography>
                </div>
              )}
              {inputQ5.toString() === "Roof & attic " ? (
                <div className="DisableRecommendation"></div>
              ) : (
                <div>
                  {" "}
                  <Typography
                    sx={{ mb: 2 }}
                    color="text.secondary"
                    className="QInsulationsDiv"
                  >
                    Roof and attic
                  </Typography>
                  <Typography variant="body2" className="InsulationFullText">
                    Insulating your roof or attic can go a long way, stopping
                    energy loss (in the form of heat or cooling) and preventing
                    heat or cold from coming in. A well-insulated roof also
                    helps you save up to 30% of your heating costs.
                  </Typography>
                </div>
              )}
              {inputQ5.toString() === "Floors & ceilings " ? (
                <div className="DisableRecommendation"></div>
              ) : (
                <div>
                  {" "}
                  <Typography
                    sx={{ mb: 2 }}
                    color="text.secondary"
                    className="QInsulationsDiv"
                  >
                    Floors or ceilings
                  </Typography>
                  <Typography variant="body2" className="InsulationFullText">
                    Adding insulation to the floors or the ceilings to upper
                    stories can help in avoiding heat loss. This is the case
                    especially if your basement ceiling is not insulated.
                  </Typography>
                </div>
              )}
              {inputQ5.toString() === "Outer walls " ? (
                <div className="DisableRecommendation"></div>
              ) : (
                <div>
                  {" "}
                  <Typography
                    sx={{ mb: 2 }}
                    color="text.secondary"
                    className="QInsulationsDiv"
                  >
                    Outer walls
                  </Typography>
                  <Typography variant="body2" className="InsulationFullText">
                    Energy is lost through not-sufficiently insulated outer
                    walls. They also keep your house warm in winter and cool in
                    summer. If possible, choose ecologically friendly insulation
                    materials. In some houses, it is not possible to insulate
                    the outer walls – in those cases there are options to
                    insulate the inner walls.
                  </Typography>
                </div>
              )}
              {inputQ5.toString() === "Ducts & Pipes" ? (
                <div className="DisableRecommendation"></div>
              ) : (
                <div>
                  {" "}
                  <Typography
                    sx={{ mb: 2 }}
                    color="text.secondary"
                    className="QInsulationsDiv"
                  >
                    Ducts and pipes
                  </Typography>
                  <Typography variant="body2" className="InsulationFullText">
                    Heat is lost or gained through duct walls and pipes.
                    Insulating your pipes and other ducts will help conserve
                    energy.
                  </Typography>
                </div>
              )}
            </CardContent>

            {/* <CardActions disableSpacing className="AccordionRecommendation">
              <Typography
                expand={expanded}
                onClick={(e) => expandAccordeon(e)}
                // onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                Doors and windows
              </Typography>
              <ExpandMore
                expand={expanded}
                onClick={(e) => expandAccordeon(e)}
                // onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="DW"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  If your windows and doors are in a good condition, a weather
                  strip or rubber sealing can go a long way. If your windows are
                  more than 10 years old, you can consider changing them to
                  energy-efficient windows. There are double or triple-pane
                  types.
                </Typography>
              </CardContent>
            </Collapse>
            <CardActions disableSpacing className="AccordionRecommendation">
              <Typography
                expand={expanded}
                onClick={(e) => expandAccordeon(e)}
                // onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="RA"
              >
                Roof and attic
              </Typography>
              <ExpandMore
                expand={expanded}
                onClick={(e) => expandAccordeon(e)}
                // onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Insulating your roof or attic can go a long way, stopping
                  energy loss (in the form of heat or cooling) and preventing
                  heat or cold from coming in. A well-insulated roof also helps
                  you save up to 30% of your heating costs.
                </Typography>
              </CardContent>
            </Collapse>
            <CardActions disableSpacing className="AccordionRecommendation">
              <Typography
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                Floors or ceilings
              </Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Adding insulation to the floors or the ceilings to upper
                  stories can help in avoiding heat loss. This is the case
                  especially if your basement ceiling is not insulated.
                </Typography>
              </CardContent>
            </Collapse>
            <CardActions disableSpacing className="AccordionRecommendation">
              <Typography
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                Outer walls
              </Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Energy is lost through not-sufficiently insulated outer walls.
                  They also keep your house warm in winter and cool in summer.
                  If possible, choose ecologically friendly insulation
                  materials. In some houses, it is not possible to insulate the
                  outer walls – in those cases there are options to insulate the
                  inner walls.
                </Typography>
              </CardContent>
            </Collapse>
            <CardActions disableSpacing className="AccordionRecommendation">
              <Typography
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                Ducts and pipes
              </Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Heat is lost or gained through duct walls and pipes.
                  Insulating your pipes and other ducts will help conserve
                  energy.
                </Typography>
              </CardContent>
            </Collapse> */}
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

export default R1B;
