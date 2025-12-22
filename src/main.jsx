import "@fontsource/roboto/100-italic.css";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500-italic.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700-italic.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900-italic.css";
import "@fontsource/roboto/900.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
