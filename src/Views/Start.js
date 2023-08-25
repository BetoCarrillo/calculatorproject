import React from "react";
import "../styles/mainstyle.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";

function Start() {
  const redirectQ1 = useNavigate();

  const handleStart = () => {
    redirectQ1("/Modules");
  };
  return (
    <div className="MainDivBackground ViewDiv">
      <div>
        <Link
          to="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={100}></img>
        </Link>
      </div>
      <div className="StartCard change-color">
        <div className="StartCardContent">
          <p>
            This is a platform currently under development to guide and support
            Change Club's members in the journey to a more sustainable
            lifestyle.
          </p>
          <p className="StartListTitle"> BEFORE YOU START:</p>
          <p>
            <span className="StartListTitle">1)</span> Questions are divided
            into the Change Clubs Modules' areas.<br></br>{" "}
            <span className="StartListTitle">2)</span> Answer each question to
            get to know your footprint and specific recommendations for you in
            each module.<br></br> <span className="StartListTitle">3)</span>{" "}
            Average data from Germany will be used in case you don't know an
            answer.
            <br></br> <span className="StartListTitle">4)</span> During the
            questions, use the arrows to navigate. At any time, you can go
            straight to the recommendations with the skip all button.<br></br>{" "}
            <span className="StartListTitle">5)</span> Required answers to
            calculate your impact are identified with " * ".<br></br>{" "}
            <span className="StartListTitle">6)</span> After answering the
            questions, you will see your impact per module and specific
            recommendations for you to start your the change. Click on each
            recommendation to know more information and additional resources.
            <br></br> <span className="StartListTitle">7)</span> You will
            accumulate stars for each completed action depending on their
            positive impact.
            <br></br> <span className="StartListTitle">8)</span> The overall
            summary displays your entire impact and the progress of your change
            journey **under development**<br></br>
            <br></br>We appreciate any feedback provided with the feedback
            button or by sending us an email to: info@changeclubs.global.{" "}
          </p>
          <p className="StartLastList"> Have fun! </p>
        </div>
      </div>
      <div className="StartButtonsDiv">
        <Button
          variant="contained"
          className="StartButton"
          onClick={handleStart}
        >
          GET STARTED
        </Button>
        <Button
          variant="contained"
          className="FeedbackButton"
          onClick={handleStart}
        >
          FEEDBACK
        </Button>
      </div>
    </div>
  );
}

export default Start;
