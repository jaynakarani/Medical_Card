import "./App.css";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Patientdetails from "./components/Patientdetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Card from "./Card";
import Addpatient from "./components/Addpatient";
import Editpatient from "./components/Editpatient";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="Addpatient" element={<Addpatient />} />
          <Route path="Editpatient" element={<Editpatient />} />
          <Route path="Patientdetails" element={<Patientdetails />} />
          {/* <Route path="Test" element={<Test />} />
          <Route path="Testcard" element={<Testcard />} />
          <Route path="Testaddpatient" element={<Testaddpatient />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
