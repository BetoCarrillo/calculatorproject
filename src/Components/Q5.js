import Card from "@mui/material/Card";
import React, { useContext, useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/mainstyle.css";
import { Link, useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Checkbox } from "bootstrap-4-react/lib/components/dom";
import CClogo from "../styles/CClogo.png";
import { ResultsContext } from "../Context/context";
import { Table } from "@mui/material";

function Q5() {
  const { CalcTotal, setInputQ5 } = useContext(ResultsContext);

  const valueQ5 = [];

  const handleChange = (event) => {
    let valueQ5Individual = event.target.value;

    valueQ5.push(valueQ5Individual);
  };

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
    setInputQ5(valueQ5);
    redirectResults("/Results");
  };

  return (
    <div className="QCardDiv">
      <h1 className="AreaHeading">HOUSING</h1>
      <div>
        <Card className=" QCard ">
          <CardContent className="QCardContent">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="QTitle"
            >
              What is well insulated?
            </Typography>
            <br></br>
            <div>
              <Table responsive="sm">
                <tbody>
                  <tr className="checkboxText">
                    <td>
                      <input
                        type="checkbox"
                        value="Doors & windows "
                        onClick={handleChange}
                      ></input>
                    </td>
                    <td className="Qtext"> &nbsp; &nbsp;Doors and windows</td>
                  </tr>
                  <tr className="checkboxText">
                    <td>
                      {" "}
                      <input
                        type="checkbox"
                        value="Roof & attic "
                        onClick={handleChange}
                      ></input>
                    </td>
                    <td className="Qtext">&nbsp; &nbsp;Roof and attic</td>
                  </tr>
                  <tr className="checkboxText">
                    <td>
                      {" "}
                      <input
                        type="checkbox"
                        value="Floors & ceilings "
                        onClick={handleChange}
                      ></input>
                    </td>
                    <td className="Qtext">&nbsp; &nbsp;Floors and ceilings</td>
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
                    <td className="Qtext">&nbsp; &nbsp;Outer walls</td>
                  </tr>
                  <tr className="checkboxText">
                    <td>
                      {" "}
                      <input
                        type="checkbox"
                        value="Ducts & Pipes"
                        onClick={handleChange}
                      ></input>
                    </td>
                    <td className="Qtext">&nbsp; &nbsp;Ducts and Pipes</td>
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
                    <td className="Qtext">&nbsp; &nbsp;None</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardContent>
          <div className="QCardButtons">
            <CardActions className="QButtons">
              <Button size="small" onClick={handlePrev}>
                <span className="material-symbols-outlined">
                  arrow_left_alt
                </span>
              </Button>
              <Button size="small" onClick={handleNext}>
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </Button>{" "}
              <Button
                size="small"
                onClick={handleSkip}
                className="ButtonSkipAll"
              >
                {isNaN(CalcTotal) ? <span>Back</span> : <span>Skip all</span>}
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>
      <div className="QNumber"> 5/17</div>
      <div className="CClogo">
        <Link
          to="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </Link>
        <p className="PoweredbyText">Powered</p>
      </div>
    </div>
  );
}

export default Q5;
