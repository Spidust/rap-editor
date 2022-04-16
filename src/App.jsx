import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Index";
import Navbar from "./Components/General/Navbar";
import AddNew from "./Components/AddNew/Index";
import Editor from "./Components/Edit/Index";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/add" element={<AddNew />} />
          <Route exact path="/edit" element={<Editor />} />
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
