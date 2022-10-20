import { indigo, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: red,
    secondary: indigo,
    text: "whitesmoke",
  },
});

export default theme;
