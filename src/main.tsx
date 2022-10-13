import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import { AppDecorator } from "./AppDecorator";
import { createTheme } from "./theme";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AppDecorator {...{ createTheme }}>
      <App />
    </AppDecorator>
  </StrictMode>
);
