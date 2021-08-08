import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

export const AppContext = createContext({
  themeMode: "lightTheme",
});

function AppProvider({ children }: any) {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "lightTheme"
  );

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevState) => {
      if (prevState === "lightTheme") {
        return "darkTheme";
      } else {
        return "lightTheme";
      }
    });
  };

  const value = { themeMode, toggleTheme };
  const costumTheme = theme[themeMode];

  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={costumTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default AppProvider;
