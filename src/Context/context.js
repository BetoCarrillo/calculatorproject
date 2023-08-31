import { createContext, useEffect, useState } from "react";

export const ResultsContext = createContext();

export const ResultsContextProvider = (props) => {
  // Energy
  const [inputQ1Energy, setInputQ1Energy] = useState("Normal grid");
  const [inputQ2Energy, setInputQ2Energy] = useState("");
  const [inputQ3Energy, setInputQ3Energy] = useState("Fans");
  const [inputQ4Energy, setInputQ4Energy] = useState("Electric heater");
  const [inputQ5Energy, setInputQ5Energy] = useState("Hard drive");
  const [inputQ6Energy, setInputQ6Energy] = useState("Music-videos");
  const [inputQ7AEnergy, setInputQ7AEnergy] = useState("2");
  const [inputQ7BEnergy, setInputQ7BEnergy] = useState("2");
  const [inputQ7CEnergy, setInputQ7CEnergy] = useState("2");
  const [inputQ7DEnergy, setInputQ7DEnergy] = useState("2");
  const [inputQ8Energy, setInputQ8Energy] = useState("Not efficient");
  const [inputQ9Energy, setInputQ9Energy] = useState("No");

  let UserRecommendations = [1, 2, 3, 4, 5, 6, 10];

  const handleRecommendations = () => {
    // console.log("inputQ1Energy", inputQ1Energy);
    // console.log("UserRecommendations", UserRecommendations);
    if (
      inputQ1Energy === "100% renewable" ||
      inputQ1Energy === "Solar energy"
    ) {
      UserRecommendations.splice(0, 1);
      // UserRecommendations.rec1 = false;
    }
    if (
      !UserRecommendations.includes(1) &&
      inputQ1Energy !== "100% renewable" &&
      inputQ1Energy !== "Solar energy"
    ) {
      UserRecommendations.push(1);
    }
    if (inputQ7BEnergy === "3") {
      UserRecommendations = UserRecommendations.filter(
        (element) => element !== 2
      );
    }
    if (!UserRecommendations.includes(2) && inputQ7BEnergy !== "3") {
      UserRecommendations.push(2);
    }

    if (inputQ8Energy === "Energy efficient") {
      UserRecommendations = UserRecommendations.filter(
        (element) => element !== 3
      );
    }
    if (
      !UserRecommendations.includes(3) &&
      inputQ8Energy !== "Energy efficient"
    ) {
      UserRecommendations.push(3);
    }

    // if (inputQ8Energy === "Efficient") {
    //   UserRecommendations = UserRecommendations.filter(
    //     (element) => element !== 3
    //   );
    // }
    // if (!UserRecommendations.includes(3) && inputQ8Energy !== "Efficient") {
    //   UserRecommendations.push(3);
    // }

    if (inputQ7AEnergy === "3") {
      UserRecommendations = UserRecommendations.filter(
        (element) => element !== 4
      );
    }
    if (!UserRecommendations.includes(4) && inputQ7AEnergy !== "3") {
      UserRecommendations.push(4);
    }

    if (inputQ7DEnergy === "3") {
      UserRecommendations = UserRecommendations.filter(
        (element) => element !== 5
      );
    }
    if (!UserRecommendations.includes(5) && inputQ7DEnergy !== "3") {
      UserRecommendations.push(5);
    }
    if (inputQ9Energy === "Yes") {
      UserRecommendations = UserRecommendations.filter(
        (element) => element !== 6
      );
    }
    if (!UserRecommendations.includes(6) && inputQ9Energy !== "Yes") {
      UserRecommendations.push(6);
    }

    if (
      inputQ2Energy === "Biogas" ||
      inputQ2Energy === "Methane (natural gas)" ||
      inputQ4Energy === "Solar energy" ||
      inputQ4Energy === "Biogas"
    ) {
      UserRecommendations = UserRecommendations.filter(
        (element) => element !== 10
      );
      console.log("natural", UserRecommendations);
    }
    if (
      !UserRecommendations.includes(10) &&
      inputQ2Energy !== "Biogas" &&
      inputQ2Energy !== "Methane (natural gas)" &&
      inputQ4Energy !== "Solar energy" &&
      inputQ4Energy !== "Biogas"
    ) {
      UserRecommendations.push(10);
      console.log("no natural", UserRecommendations);
    }

    // console.log("INRecommendations", UserRecommendations);
    return UserRecommendations;
    // UserRecommendations.remove("rec3");
    // UserRecommendations.rec3 = false;

    // if (inputQ1Energy === "Solar energy") {
    //   UserRecommendations.pull("rec1");
    //   // UserRecommendations.rec1 = false;
    // }
    // if (inputQ7BEnergy === "I'm a master") {
    //   UserRecommendations.pull("rec2");
    //   // UserRecommendations.rec2 = false;
    // }
    // if (inputQ8Energy === "Yes") {
    //   UserRecommendations.remove("rec3");
    //   // UserRecommendations.rec3 = false;
    // }
    // if (inputQ7AEnergy === "I'm a master") {
    //   UserRecommendations.remove("rec4");
    //   // UserRecommendations.rec4 = false;
    // }
    // if (inputQ7DEnergy === "I'm a master") {
    //   UserRecommendations.remove("rec5");
    //   // UserRecommendations.rec5 = false;
    // }
    // if (inputQ9Energy === "Yes") {
    //   UserRecommendations.remove("rec6");
    //   // UserRecommendations.rec6 = false;
    // }
  };

  // const [inputQ1, setInputQ1] = useState("Germany");
  // const [inputQ2, setInputQ2] = useState(null);
  // const [inputQ3, setInputQ3] = useState(null);
  // const [inputQ4, setInputQ4] = useState(null);
  // const [inputQ5, setInputQ5] = useState("");
  // const [inputQ6, setInputQ6] = useState(null);
  // const [inputQ7, setInputQ7] = useState(null);
  // const [inputQ8, setInputQ8] = useState(0);
  // const [inputQ9, setInputQ9] = useState(null);
  // const [inputQ10, setInputQ10] = useState(null);
  // const [inputQ11, setInputQ11] = useState(null);
  // const [inputQ12, setInputQ12] = useState(0);
  // const [inputQ13, setInputQ13] = useState(null);
  // const [inputQ14, setInputQ14] = useState(null);
  // const [inputQ15, setInputQ15] = useState(null);
  // const [inputQ16, setInputQ16] = useState(null);
  // const [inputQ17, setInputQ17] = useState(0);
  // const [CalcTotal, setCalcTotal] = useState(null);

  // useEffect(() => {
  //   console.log("use effect run");
  // }, [
  //   inputQ1Energy,
  //   setInputQ1Energy,
  //   inputQ2Energy,
  //   setInputQ2Energy,
  //   inputQ3Energy,
  //   setInputQ3Energy,
  //   inputQ4Energy,
  //   setInputQ4Energy,
  //   inputQ5Energy,
  //   setInputQ5Energy,
  //   inputQ6Energy,
  //   setInputQ6Energy,
  //   inputQ7AEnergy,
  //   setInputQ7AEnergy,
  //   inputQ7BEnergy,
  //   setInputQ7BEnergy,
  //   inputQ7CEnergy,
  //   setInputQ7CEnergy,
  //   inputQ8Energy,
  //   setInputQ8Energy,
  //   inputQ9Energy,
  //   setInputQ9Energy,
  //   inputQ7DEnergy,
  //   setInputQ7DEnergy,
  // ]);
  handleRecommendations();

  useEffect(() => {
    // console.log("after function", UserRecommendations);
  }, [UserRecommendations]);

  return (
    <ResultsContext.Provider
      value={{
        // Energy
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
        inputQ7DEnergy,
        setInputQ7DEnergy,
        inputQ8Energy,
        setInputQ8Energy,
        inputQ9Energy,
        setInputQ9Energy,
        //
        // inputQ1,
        // setInputQ1,
        // inputQ2,
        // setInputQ2,
        // inputQ3,
        // setInputQ3,
        // inputQ4,
        // setInputQ4,
        // inputQ5,
        // setInputQ5,
        // inputQ6,
        // setInputQ6,
        // inputQ7,
        // setInputQ7,
        // inputQ8,
        // setInputQ8,
        // inputQ9,
        // setInputQ9,
        // inputQ10,
        // setInputQ10,
        // inputQ11,
        // setInputQ11,
        // inputQ12,
        // setInputQ12,
        // inputQ13,
        // setInputQ13,
        // inputQ14,
        // setInputQ14,
        // inputQ15,
        // setInputQ15,
        // inputQ16,
        // setInputQ16,
        // inputQ17,
        // setInputQ17,
        // setCalcTotal,
        // CalcTotal,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};
