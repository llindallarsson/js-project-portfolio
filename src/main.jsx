import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App.jsx";

import "./index.css";

import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
