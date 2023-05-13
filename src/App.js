import Landing from "./Views/Landing";
import Q1 from "./Components/Q1";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/mainstyle.css";

function App() {
  return (
    <div className="divbackground">
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/Q1" element={<Q1 />} />
      </Routes>
    </div>
  );
}

export default App;
