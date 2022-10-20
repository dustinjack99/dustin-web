import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Adb from "@mui/icons-material/Adb";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Adb sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              color: "text",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
            }}
          >
            Dustin Jackson
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu}>
              <MenuIcon sx={{ color: "text" }} />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                sx={{
                  bgcolor: "secondary.light",
                  ":hover": {
                    bgcolor: "secondary.dark",
                  },
                }}
                onClick={handleCloseNavMenu}
              >
                <Typography color="text" textAlign="center">
                  About
                </Typography>
              </MenuItem>
              <MenuItem
                sx={{
                  bgcolor: "secondary.light",
                  ":hover": {
                    bgcolor: "secondary.dark",
                  },
                }}
                onClick={handleCloseNavMenu}
              >
                <Typography color="text" textAlign="center">
                  Portfolio
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Adb sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              color: "text",
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
            }}
          >
            Dustin Jackson
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <IconButton
              bgcolor="primary"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Typography color="text">About</Typography>
            </IconButton>
            <IconButton
              bgcolor="primary"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Typography color="text">Portfolio</Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
