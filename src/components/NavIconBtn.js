import { Cyclone } from "@mui/icons-material";
import { IconButton, Popover } from "@mui/material";
import profile from "../assets/images/placeholder.jpg";
import { useState } from "react";

const NavIconBtn = ({ display }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <IconButton onClick={handleClick}>
      <Cyclone
        sx={{
          color: "text",
          display,
          mr: 1,
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <img alt="dustinjackson" height={500} src={profile} />
      </Popover>
    </IconButton>
  );
};

export default NavIconBtn;
