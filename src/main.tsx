import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ResetCss } from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { dark } from "./theme";
import AppRouter from "./routes";
import { Header } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={dark()}>
        <ResetCss />
        <BrowserRouter>
          <Header />
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
