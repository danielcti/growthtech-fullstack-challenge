import { darken, lighten } from "polished";

const defaultTheme = {
  colors: {
    main: "#009fe3",
    secondary: "#ea9c02",
    dark: "#223a45",
    light: "#fff",
    lightBackground: "#e1e1e1",
    mainHovered: darken(0.1, "#009fe3"),
    secondaryHovered: darken(0.1, "#ea9c02"),
    darkHovered: lighten(0.1, "#223a45"),
  },
};

export default defaultTheme;
