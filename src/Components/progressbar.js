import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, question, totalquestions } = props;

  const containerStyles = {
    height: 6,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    opacity: 0.8,
  };

  const labelStyles = {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 60,
    paddingRight: 60,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Palanquin",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>
          {`${question}`}
          {`/${totalquestions}`}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
