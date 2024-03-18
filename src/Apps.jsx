import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutDetails from "./components/AboutDetails";
import App from "./App";

function Apps() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutDetails />} />
      </Routes>
    </div>
  );
}

export default Apps;
