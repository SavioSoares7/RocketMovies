import React from "react";
import ReactDOM from "react-dom/client";
import { CreateMovie } from "./page/CreateMovie";

import { ThemeProvider } from "styled-components";

import Colors from "./styles/themes";
import GlobalStyle from "./styles/globalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Colors}>
      <GlobalStyle />
      <CreateMovie />
    </ThemeProvider>
  </React.StrictMode>
);
