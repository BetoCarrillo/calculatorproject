import Landing from "./Views/Landing";
import Q1 from "./Components/Q1";
import Q2 from "./Components/Q2";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/mainstyle.css";
import Q3 from "./Components/Q3";
import Q4 from "./Components/Q4";
import Q5 from "./Components/Q5";
import Q6 from "./Components/Q6";
import Q7 from "./Components/Q7";
import Q8 from "./Components/Q8";
import Q9 from "./Components/Q9";
import Q10 from "./Components/Q10";
import Q11 from "./Components/Q11";
import Q12 from "./Components/Q12";
import Q13 from "./Components/Q13";
import Q14 from "./Components/Q14";
import Q15 from "./Components/Q15";
import Q17 from "./Components/Q17";
import Q16 from "./Components/Q16";
import Results from "../src/Views/Results";
import { ResultsContextProvider } from "./Context/context";
import RecommendationsLinks from "./Views/RecommendationsLinks";
import R1B from "./Components/R1B";
import R2B from "./Components/R2B";
import R3B from "./Components/R3B";
import R4B from "./Components/R4B";
import R5B from "./Components/R5B";
import R6B from "./Components/R6B";
import R7B from "./Components/R7B";
import R8B from "./Components/R8B";
import R9B from "./Components/R9B";
import R10B from "./Components/R10B";
import R11B from "./Components/R11B";
import R12B from "./Components/R12B";

function App() {
  return (
    <div className="divbackground">
      <ResultsContextProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Q1" element={<Q1 />} />
          <Route path="/Q2" element={<Q2 />} />
          <Route path="/Q3" element={<Q3 />} />
          <Route path="/Q4" element={<Q4 />} />
          <Route path="/Q5" element={<Q5 />} />
          <Route path="/Q6" element={<Q6 />} />
          <Route path="/Q7" element={<Q7 />} />
          <Route path="/Q8" element={<Q8 />} />
          <Route path="/Q9" element={<Q9 />} />
          <Route path="/Q10" element={<Q10 />} />
          <Route path="/Q11" element={<Q11 />} />
          <Route path="/Q12" element={<Q12 />} />
          <Route path="/Q13" element={<Q13 />} />
          <Route path="/Q14" element={<Q14 />} />
          <Route path="/Q15" element={<Q15 />} />
          <Route path="/Q16" element={<Q16 />} />
          <Route path="/Q17" element={<Q17 />} />
          <Route path="/Results" element={<Results />} />
          <Route
            path="/RecommendationsLinks"
            element={<RecommendationsLinks />}
          />
          <Route path="/insulateyourhome" element={<R1B />} />
          <Route path="/heatpump" element={<R2B />} />
          <Route path="/smarthomecontrol" element={<R3B />} />
          <Route path="/rentsustainably" element={<R4B />} />
          <Route path="/ownsustainably" element={<R5B />} />
          <Route path="/solarenergy" element={<R6B />} />
          <Route path="/roomtemperature" element={<R7B />} />
          <Route path="/ledbulbs" element={<R8B />} />
          <Route path="/ventilation" element={<R9B />} />
          <Route path="/detective" element={<R10B />} />
          <Route path="/solarcooker" element={<R11B />} />
          <Route path="/familycuddle" element={<R12B />} />
        </Routes>
      </ResultsContextProvider>
    </div>
  );
}

export default App;
