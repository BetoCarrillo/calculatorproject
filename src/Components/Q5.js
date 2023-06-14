import Card from "@mui/material/Card";
import React, { useContext, useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/mainstyle.css";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Checkbox } from "bootstrap-4-react/lib/components/dom";
import CClogo from "../styles/CClogo.png";
import { ResultsContext } from "../Context/context";
import { Table } from "@mui/material";

function Q5() {
  const { setInputQ5 } = useContext(ResultsContext);

  const valueQ5 = [];

  const handleChange = (event) => {
    let valueQ5Individual = event.target.value;

    valueQ5.push(valueQ5Individual);
  };

  console.log(valueQ5);

  const redirectQ4 = useNavigate();
  const redirectQ6 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ4("/Q4");
  };

  const handleNext = () => {
    setInputQ5(valueQ5);
    redirectQ6("/Q6");
  };

  const handleSkip = () => {
    redirectResults("/Results");
  };

  return (
    <div className="QCardDiv">
      <h1 className="AreaHeading">HOUSING</h1>
      <div>
        <Card sx={{ maxWidth: 450 }} className="QCard">
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="QTitle"
            >
              How is it insulated?
            </Typography>
            <Table responsive="sm">
              <tbody>
                <tr className="checkboxText">
                  <td>
                    <input
                      type="checkbox"
                      value="Doors and windows "
                      onClick={handleChange}
                    ></input>
                  </td>
                  <td className="Qtext">Doors and windows</td>
                </tr>
                <tr className="checkboxText">
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      value="Roof and attic "
                      onClick={handleChange}
                    ></input>
                  </td>
                  <td className="Qtext">Roof and attic</td>
                </tr>
                <tr className="checkboxText">
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      value="Floors and ceilings "
                      onClick={handleChange}
                    ></input>
                  </td>
                  <td className="Qtext">Floors and ceilings</td>
                </tr>
                <tr className="checkboxText">
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      value="Outer walls "
                      onClick={handleChange}
                    ></input>
                  </td>
                  <td className="Qtext">Outer walls</td>
                </tr>
                <tr className="checkboxText">
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      value="Ducts and Pipes"
                      onClick={handleChange}
                    ></input>
                  </td>
                  <td className="Qtext">Ducts and Pipes</td>
                </tr>
                <tr className="checkboxText">
                  <td>
                    {" "}
                    <input
                      type="checkbox"
                      value="None"
                      onClick={handleChange}
                    ></input>
                  </td>
                  <td className="Qtext">None</td>
                </tr>
              </tbody>
            </Table>

            {/* <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label="Doors and windows"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Roof and attic"
                  size=""
                  onClick={handleChange}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Floors and ceilings"
                  onClick={handleChange}
                />
                <FormControlLabel control={<Checkbox />} label="Outer walls" />
                <FormControlLabel
                  value="Doors and windows"
                  control={<Radio />}
                  label="Doors and windows"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="roofandattic"
                  control={<Radio />}
                  label="Roof and attic"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="floorsandceilings"
                  control={<Radio />}
                  label="Floors and ceilings"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="outerwalls"
                  control={<Radio />}
                  label="Outer walls"
                  onClick={handleChange}
                />
              </RadioGroup>
            </FormControl> */}
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handlePrev}>
              Previous
            </Button>
            <Button size="small" onClick={handleNext}>
              Next
            </Button>
            <Button size="small" onClick={handleSkip}>
              Skip
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="QNumber"> 5/17</div>
      <div className="CClogo">
        <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default Q5;
