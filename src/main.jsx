import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ContentProvider } from "./context/ContentContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ContentProvider>
        <App />
      </ContentProvider>
    </Router>
  </React.StrictMode>
);
