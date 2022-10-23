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
  Popover,
} from "@mui/material";

import { Menu as MenuIcon, Adb } from "@mui/icons-material";
import { Link } from "react-router-dom";

import profile from "../assets/images/placeholder.jpg";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            to="/"
            style={{
              display: "flex",
              flexDirection: "row",
              textDecoration: "none",
            }}
          >
            <Adb
              sx={{
                color: "text",
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
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
            <Adb
              sx={{ color: "text", display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
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
          </Link>
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
          <IconButton onClick={handleClick}>
            <Typography
              sx={{
                mr: 2,
                color: "text",
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
              }}
            >
              ***Beauty***
            </Typography>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <img alt="dustinjackson" sx={{ height: "2em" }} src={profile} />
            </Popover>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
