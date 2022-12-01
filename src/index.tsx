import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./index.css";
import MainLayout from "./MainLayout/MainLayout";
import { store } from "./store/store";
import { theme } from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
