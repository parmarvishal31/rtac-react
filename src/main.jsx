import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Router } from "react-router-dom";
import Apps from "./Apps.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Apps />
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  </React.StrictMode>
);
