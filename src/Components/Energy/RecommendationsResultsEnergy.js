import React, { useContext, useEffect } from "react";
import "../../styles/energystyle.css";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import RecEnergy1 from "./Rec1Energy";
import RecEnergy2 from "./Rec2Energy";
import RecEnergy3 from "./Rec3Energy";
import RecEnergy4 from "./Rec4Energy";
import RecEnergy5 from "./Rec5Energy";
import RecEnergy6 from "./Rec6Energy";
import { Button } from "@mui/material";
import RecEnergy7 from "./Rec7Energy";
import RecEnergy8 from "./Rec8Energy";
import RecEnergy9 from "./Rec9Energy";
import RecEnergy10 from "./Rec10Energy";

function RecommendationsResultsEnergy() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  const {
    UserRecommendations,
    inputQ1Energy,
    setInputQ1Energy,
    inputQ2Energy,
    setInputQ2Energy,
    inputQ3Energy,
    setInputQ3Energy,
    inputQ4Energy,
    setInputQ4Energy,
    inputQ5Energy,
    setInputQ5Energy,
    inputQ6Energy,
    setInputQ6Energy,
    inputQ7AEnergy,
    setInputQ7AEnergy,
    inputQ7BEnergy,
    setInputQ7BEnergy,
    inputQ7CEnergy,
    setInputQ7CEnergy,
    inputQ8Energy,
    setInputQ8Energy,
    inputQ9Energy,
    setInputQ9Energy,
    inputQ7DEnergy,
    setInputQ7DEnergy,
  } = useContext(ResultsContext);

  // const UserRecommendationAnswers = {
  //   Q1Energy: inputQ1Energy,
  //   Q2Energy: inputQ2Energy,
  //   Q3Energy: inputQ3Energy,
  //   Q4Energy: inputQ4Energy,
  //   Q5Energy: inputQ5Energy,
  //   Q6Energy: inputQ6Energy,
  //   Q7AEnergy: inputQ7AEnergy,
  //   Q7BEnergy: inputQ7BEnergy,
  //   Q7CEnergy: inputQ7CEnergy,
  //   Q7DEnergy: inputQ7DEnergy,
  //   Q8Energy: inputQ9Energy,
  //   Q9Energy: inputQ9Energy,
  // };

  // let UserRecommendations = ["1", 2, 3, 4, 5, 6, 7, 8, 9];

  // const handleRecommendations = () => {
  //   console.log("inputQ1Energy", inputQ1Energy);
  //   console.log("UserRecommendations", UserRecommendations);
  //   if (
  //     inputQ1Energy === "100% renewable" ||
  //     inputQ1Energy === "Solar energy"
  //   ) {
  //     UserRecommendations.splice(0, 1);
  //     // UserRecommendations.rec1 = false;
  //   }
  //   if (
  //     !UserRecommendations.includes("1") &&
  //     inputQ1Energy !== "100% renewable" &&
  //     inputQ1Energy !== "Solar energy"
  //   ) {
  //     UserRecommendations.push("1");
  //   }
  //   if (inputQ7BEnergy === "3") {
  //     UserRecommendations = UserRecommendations.filter(
  //       (element) => element !== 2
  //     );
  //   }
  //   if (!UserRecommendations.includes(2) && inputQ7BEnergy !== "3") {
  //     UserRecommendations.push(2);
  //   }
  //   // if (inputQ8Energy === "Efficient") {
  //   //   UserRecommendations = UserRecommendations.filter(
  //   //     (element) => element !== 3
  //   //   );
  //   // }
  //   // if (!UserRecommendations.includes(3) && inputQ8Energy !== "Efficient") {
  //   //   UserRecommendations.push(3);
  //   // }

  //   if (inputQ7AEnergy === "3") {
  //     UserRecommendations = UserRecommendations.filter(
  //       (element) => element !== 4
  //     );
  //   }
  //   if (!UserRecommendations.includes(4) && inputQ7AEnergy !== "3") {
  //     UserRecommendations.push(4);
  //   }

  //   if (inputQ7DEnergy === "3") {
  //     UserRecommendations = UserRecommendations.filter(
  //       (element) => element !== 5
  //     );
  //   }
  //   if (!UserRecommendations.includes(5) && inputQ7DEnergy !== "3") {
  //     UserRecommendations.push(5);
  //   }
  //   if (inputQ9Energy === "Yes") {
  //     UserRecommendations = UserRecommendations.filter(
  //       (element) => element !== 6
  //     );
  //   }
  //   if (!UserRecommendations.includes(6) && inputQ9Energy !== "Yes") {
  //     UserRecommendations.push(6);
  //   }

  //   console.log("INRecommendations", UserRecommendations);
  //   return UserRecommendations;
  //   // UserRecommendations.remove("rec3");
  //   // UserRecommendations.rec3 = false;

  //   // if (inputQ1Energy === "Solar energy") {
  //   //   UserRecommendations.pull("rec1");
  //   //   // UserRecommendations.rec1 = false;
  //   // }
  //   // if (inputQ7BEnergy === "I'm a master") {
  //   //   UserRecommendations.pull("rec2");
  //   //   // UserRecommendations.rec2 = false;
  //   // }
  //   // if (inputQ8Energy === "Yes") {
  //   //   UserRecommendations.remove("rec3");
  //   //   // UserRecommendations.rec3 = false;
  //   // }
  //   // if (inputQ7AEnergy === "I'm a master") {
  //   //   UserRecommendations.remove("rec4");
  //   //   // UserRecommendations.rec4 = false;
  //   // }
  //   // if (inputQ7DEnergy === "I'm a master") {
  //   //   UserRecommendations.remove("rec5");
  //   //   // UserRecommendations.rec5 = false;
  //   // }
  //   // if (inputQ9Energy === "Yes") {
  //   //   UserRecommendations.remove("rec6");
  //   //   // UserRecommendations.rec6 = false;
  //   // }
  // };

  const redirectAllRecommendations = useNavigate();
  const handleStart = () => {
    redirectAllRecommendations("");
  };

  // useEffect(() => {
  //   handleRecommendations();
  //   console.log("after function", UserRecommendations);
  // }, [UserRecommendations]);

  // console.log("UserRecommendationAnswers", UserRecommendationAnswers);

  return (
    <div className="EnergyCardRecResults">
      <div className="EnergyCardContentRecResults">
        <div className="EnergyCardTitleRecResults">Recommendations for you</div>
        <div className="OptionDivRecResults">
          {/* {UserRecommendations &&
            UserRecommendations.map((recommendation, i) =>
              recommendation[i] > 6 ? (
                <span>more</span>
              ) : (
                <span> map working</span>
              )
            )} */}
          {UserRecommendations && UserRecommendations.includes(1) ? (
            <RecEnergy1 />
          ) : (
            <></>
          )}
          {UserRecommendations && UserRecommendations.includes(2) ? (
            <RecEnergy2 />
          ) : (
            <></>
          )}
          {UserRecommendations && UserRecommendations.includes(3) ? (
            <RecEnergy3 />
          ) : (
            <></>
          )}
          {UserRecommendations &&
          UserRecommendations.length < 7 &&
          UserRecommendations.includes(10) ? (
            <RecEnergy10 />
          ) : (
            <></>
          )}

          {UserRecommendations && UserRecommendations.includes(4) ? (
            <RecEnergy4 />
          ) : (
            <></>
          )}
          {UserRecommendations && UserRecommendations.includes(5) ? (
            <RecEnergy5 />
          ) : (
            <></>
          )}
          {UserRecommendations && UserRecommendations.includes(6) ? (
            <RecEnergy6 />
          ) : (
            <></>
          )}

          {UserRecommendations && UserRecommendations.length < 6 ? (
            <>
              {" "}
              <RecEnergy7 />
            </>
          ) : (
            <></>
          )}
          {UserRecommendations && UserRecommendations.length < 5 ? (
            <>
              {" "}
              <RecEnergy8 />
            </>
          ) : (
            <></>
          )}
          {UserRecommendations && UserRecommendations.length < 4 ? (
            <>
              {" "}
              <RecEnergy9 />
            </>
          ) : (
            <></>
          )}

          {/* {UserRecommendations &&
            UserRecommendations.map((recommendation, i) =>
              recommendation[i] > 6 ? (
                <span>
                  {" "}
                  <RecEnergy7 />
                  <RecEnergy8 />
                  <RecEnergy9 />
                </span>
              ) : (
                <span></span>
              )
            )} */}

          {/* <RecEnergy2 />
          <RecEnergy5 />
          <RecEnergy7 /> */}
          {/* <RecEnergy3 /> */}
          {/* <RecEnergy1 />
          <RecEnergy4 />
          <RecEnergy8 /> */}
          {/* <RecEnergy6 /> */}
          {/* <RecEnergy9 /> */}
          <div className="AllRecButtonDiv">
            <div></div>
            <Button
              variant="contained"
              className="AllRecButton"
              onClick={handleStart}
            >
              All Recommendations and resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationsResultsEnergy;
