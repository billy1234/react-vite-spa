import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  UuiBaseTheme,
  UuiDefaultTheme,
  UuiGlobalVariablesTheme,
  UuiInverseTheme,
} from "@aonunited/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <UuiDefaultTheme />
    <UuiInverseTheme />
    <UuiGlobalVariablesTheme />
    <UuiBaseTheme />
    <App />
  </React.StrictMode>,
);
