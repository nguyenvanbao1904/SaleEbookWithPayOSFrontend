import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success.html" element={<Success />} />
      </Routes>
    </Router>
  );
}
