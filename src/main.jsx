//Setup to import components
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";

/*Initializes a root node for your React application by selecting an HTML element with the ID root in the document.
Uses the render method to mount the React application into this root node.
Wraps the entire application in <React.StrictMode> to enable checks and warnings for potential problems in your application during development.
Places the <BrowserRouter> component around the <App /> component, enabling routing throughout the application.
*/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
