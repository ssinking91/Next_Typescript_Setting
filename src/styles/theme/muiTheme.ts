import { createTheme } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
//
import themeTypographys from "./typographys";
import themeLayout from "./layout";

const ThemeOptions: ThemeOptions = {
  // configuration variables
  typography: themeTypographys(),
  // Custom variables
  layout: themeLayout(),
};

const muiTheme = createTheme(ThemeOptions);

export default muiTheme;
