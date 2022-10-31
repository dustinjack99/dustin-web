import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";

import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

import NavIconBtn from "./NavIconBtn";

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
          <NavIconBtn display={{ xs: "none", md: "flex" }} />
          <Link
            to="/"
            style={{
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
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
          </Link>

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
                "& .MuiPaper-root": { backgroundColor: "secondary.light" },
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
                <Link style={{ textDecoration: "none" }} to="/about">
                  <Typography color="text" textAlign="center">
                    About
                  </Typography>
                </Link>
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
                <Link style={{ textDecoration: "none" }} to="/portfolio">
                  <Typography color="text" textAlign="center">
                    Portfolio
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Link
            to="/"
            style={{
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                color: "text",
                display: { xs: "none", sm: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
              }}
            >
              Dustin Jackson
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                color: "text",
                display: { xs: "flex", sm: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
              }}
            >
              Dustin
            </Typography>
          </Link>
          <NavIconBtn display={{ xs: "flex", md: "none" }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <IconButton
              bgcolor="primary"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Link style={{ textDecoration: "none" }} to="/about">
                <Typography color="text">About</Typography>
              </Link>
            </IconButton>
            <IconButton
              bgcolor="primary"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Link style={{ textDecoration: "none" }} to="/portfolio">
                <Typography color="text">Portfolio</Typography>
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
