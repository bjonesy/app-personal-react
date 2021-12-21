import { indigo, pink } from "@mui/material/colors";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: indigo["A700"],
    },
    secondary: {
      main: pink["A400"],
    },
  },
});
