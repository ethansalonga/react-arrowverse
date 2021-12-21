import "./index.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainShow from "./pages/MainShow";
import CastMember from "./pages/CastMember";
import axios from "axios";

function App() {
  const [show, setShow] = useState([]);
  const [cast, setCast] = useState([]);

  const fetchData = async () => {
    const { data: show } = await axios.get("https://api.tvmaze.com/shows/4");
    setShow(show);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchCast = async () => {
    const { data: cast} = await axios.get("https://api.tvmaze.com/shows/4/cast")
    setCast(cast);
  }

  useEffect(() => {
    fetchCast();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainShow show={show} cast={cast} />
            }
          />
          <Route path="/:id" element={<CastMember />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
