import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

ReactDOM.render(
  <ResultContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ResultContextProvider>,
  document.getElementById("root")
);
