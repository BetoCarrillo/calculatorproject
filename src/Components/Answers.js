import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../Context/context";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

function Answers() {
  const {
    inputQ1,
    inputQ2,
    inputQ3,
    inputQ4,
    inputQ5,
    inputQ6,
    inputQ7,
    inputQ8,
    inputQ9,
    inputQ10,
    inputQ11,
    inputQ12,
    inputQ13,
    inputQ14,
    inputQ15,
    inputQ16,
    inputQ17,
    setCalcTotal,
    CalcTotal,
  } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ2 = event.target.value;
    console.log(valueQ2);
  };

  const redirectQ17 = useNavigate();
  const redirectQ1 = useNavigate();

  const handlePrev = () => {
    redirectQ17("/Q17");
  };

  const handleNext = () => {
    redirectQ1("/Q1");
  };

  return (
    <div>
      <Card className="QCard">
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="QTitle"
          >
            Answers{" "}
          </Typography>
          <table responsive="m" className="TableResults">
            <tbody>
              <tr>
                <td className="ResultTableQuestions">
                  {" "}
                  <Link className="ResultTableQuestions" to="/Q1">
                    {" "}
                    Country:{" "}
                  </Link>{" "}
                </td>
                <td className="ResultTableAnswers">{inputQ1}</td>
              </tr>
              <tr>
                <td>
                  <Link className="ResultTableQuestions" to="/Q2">
                    {" "}
                    Type of building:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">{inputQ2}</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <Link className="ResultTableQuestions" to="/Q3">
                    {" "}
                    Property:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">{inputQ3}</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <Link className="ResultTableQuestions" to="/Q4">
                    {" "}
                    Built or retrofitted:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">{inputQ4}</td>
              </tr>
              <tr>
                <td>
                  <Link className="ResultTableQuestions" to="/Q5">
                    {" "}
                    Insultation:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">{inputQ5}</td>
              </tr>
              <tr>
                <td>
                  <Link className="ResultTableQuestions" to="/Q6">
                    {" "}
                    Smart homecontrol:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">{inputQ6}</td>
              </tr>
              <tr>
                <td>
                  <Link className="ResultTableQuestions" to="/Q7">
                    {" "}
                    LED bulbs:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">{inputQ7}</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <Link className="ResultTableQuestions" to="/Q8">
                    {" "}
                    Size:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">
                  {" "}
                  {isNaN(CalcTotal) ? (
                    <div className="DisableRecommendation">
                      {" "}
                      CALCULATION NOT READY
                    </div>
                  ) : (
                    <span> {inputQ8} m2</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <Link className="ResultTableQuestions" to="/Q9">
                    {" "}
                    Bedrooms:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">{inputQ9}</td>
              </tr>
              <tr>
                <td>
                  <Link className="ResultTableQuestions" to="/Q10">
                    {" "}
                    Windows:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">{inputQ10}</td>
              </tr>
              <tr>
                <td>
                  <Link className="ResultTableQuestions" to="/Q11">
                    {" "}
                    People:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">{inputQ11}</td>
              </tr>
              <tr>
                <td>
                  <Link className="ResultTableQuestions" to="/Q12">
                    {" "}
                    Annual consumption:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">
                  {" "}
                  {isNaN(CalcTotal) ? (
                    <div className="DisableRecommendation">
                      {" "}
                      CALCULATION NOT READY
                    </div>
                  ) : (
                    <span> {inputQ12} kW</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <Link className="ResultTableQuestions" to="/Q13">
                    {" "}
                    Energy source:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">{inputQ13}</td>
              </tr>
              <tr>
                <td>
                  <Link className="ResultTableQuestions" to="/Q14">
                    {" "}
                    Heating system:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">{inputQ14}</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <Link className="ResultTableQuestions" to="/Q15">
                    {" "}
                    Cooling system:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">{inputQ15}</td>
              </tr>
              <tr>
                <td>
                  <Link className="ResultTableQuestions" to="/Q16">
                    {" "}
                    Water heating:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">{inputQ16}</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <Link className="ResultTableQuestions" to="/Q17">
                    {" "}
                    Monthly bill:{" "}
                  </Link>
                </td>
                <td className="ResultTableAnswers">
                  {isNaN(CalcTotal) ? (
                    <div className="DisableRecommendation">
                      {" "}
                      CALCULATION NOT READY
                    </div>
                  ) : (
                    <span> €{inputQ17}</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <span className="material-symbols-outlined editIcon">
              edit_note
            </span>{" "}
            <span className="editText">
              Edit the answers by clicking each question.
            </span>
          </div>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            className="StartOverButton"
            onClick={handleNext}
          >
            Start over
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Answers;
