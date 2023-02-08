import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ResetCss } from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { dark } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={dark()}>
      <ResetCss />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
