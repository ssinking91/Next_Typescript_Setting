import { createTheme } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
//
import themeTypographys from "./typographys";
// import themeComponents from "./components";

const ThemeOptions: ThemeOptions = {
  typography: themeTypographys(),
  // components: themeComponents(),
};

const muiTheme = createTheme(ThemeOptions);

export default muiTheme;
