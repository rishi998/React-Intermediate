import React from "react";
import Home from "./homepage/home";
import Course from "./components/course";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
