import React, { useContext } from "react";
import { Container, Sun, Moon } from "./styles";
import { AppContext } from "../../providers/AppProvider";
import Switch from "react-switch";

function ThemeSwitcher() {
  const { toggleTheme, themeMode } = useContext<any>(AppContext);

  return (
    <Container>
      <Switch
        checked={themeMode === "lightTheme" ? true : false}
        height={50}
        width={120}
        checkedIcon={
          <Sun color={themeMode === "lightTheme" ? "white" : "grey"} />
        }
        uncheckedIcon={
          <Moon color={themeMode === "darkTheme" ? "#009fe3" : "#009fe3"} />
        }
        onChange={toggleTheme}
      />
    </Container>
  );
}

export default ThemeSwitcher;
