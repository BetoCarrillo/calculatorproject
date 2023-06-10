import { createContext, useState } from "react";

export const ResultsContext = createContext();

export const ResultsContextProvider = (props) => {
  const [inputQ17, setInputQ17] = useState(null);

  return (
    <ResultsContext.Provider value={{ inputQ17, setInputQ17 }}>
      {props.children}
    </ResultsContext.Provider>
  );
};
