import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import defaultTheme from "./styles/theme";

import Routes from "./routes";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
