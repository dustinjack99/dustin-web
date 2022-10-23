import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import { Email } from "@mui/icons-material";
import { Link } from "@mui/material";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function Footer() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <StyledFab color="secondary" aria-label="add">
          <Link color="inherit" href="mailto:dustin.guy.jackson@gmail.com">
            <Email />
          </Link>
        </StyledFab>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <Link target="_blank" href="https://github.com/dustinjack99">
            <Avatar src="../assets/images/git-logo.png" />
          </Link>
        </IconButton>
        <IconButton color="inherit">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/dustinguyjackson"
          >
            <Avatar src="../assets/images/linkedIn_logo.png" />
          </Link>
        </IconButton>
        <IconButton color="inherit">
          <Link
            target="_blank"
            href="https://www.facebook.com/dustin.guy.jackson"
          >
            <Avatar src="../assets/images/facebook-logo.png" />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
