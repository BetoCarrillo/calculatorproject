import { createContext, useState } from "react";

export const ResultsContext = createContext();

export const ResultsContextProvider = (props) => {
  // Energy
  const [inputQ1Energy, setInputQ1Energy] = useState(null);
  const [inputQ1, setInputQ1] = useState("Germany");

  const [inputQ2, setInputQ2] = useState(null);
  const [inputQ3, setInputQ3] = useState(null);
  const [inputQ4, setInputQ4] = useState(null);
  const [inputQ5, setInputQ5] = useState("");
  const [inputQ6, setInputQ6] = useState(null);
  const [inputQ7, setInputQ7] = useState(null);
  const [inputQ8, setInputQ8] = useState(0);
  const [inputQ9, setInputQ9] = useState(null);
  const [inputQ10, setInputQ10] = useState(null);
  const [inputQ11, setInputQ11] = useState(null);
  const [inputQ12, setInputQ12] = useState(0);
  const [inputQ13, setInputQ13] = useState(null);
  const [inputQ14, setInputQ14] = useState(null);
  const [inputQ15, setInputQ15] = useState(null);
  const [inputQ16, setInputQ16] = useState(null);
  const [inputQ17, setInputQ17] = useState(0);
  const [CalcTotal, setCalcTotal] = useState(null);

  return (
    <ResultsContext.Provider
      value={{
        inputQ1Energy,
        setInputQ1Energy,
        inputQ1,
        setInputQ1,
        inputQ2,
        setInputQ2,
        inputQ3,
        setInputQ3,
        inputQ4,
        setInputQ4,
        inputQ5,
        setInputQ5,
        inputQ6,
        setInputQ6,
        inputQ7,
        setInputQ7,
        inputQ8,
        setInputQ8,
        inputQ9,
        setInputQ9,
        inputQ10,
        setInputQ10,
        inputQ11,
        setInputQ11,
        inputQ12,
        setInputQ12,
        inputQ13,
        setInputQ13,
        inputQ14,
        setInputQ14,
        inputQ15,
        setInputQ15,
        inputQ16,
        setInputQ16,
        inputQ17,
        setInputQ17,
        setCalcTotal,
        CalcTotal,
      }}
    >
      {props.children}
    </ResultsContext.Provider>
  );
};
