import { Avatar, IconButton, Popover, Typography } from "@mui/material";
import { useState } from "react";

const IconDesc = ({ tech, idx }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <IconButton onClick={handleClick} key={tech.name + idx}>
        <Avatar src={tech.iconUrl} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPopover-paper": {
            border: "3px solid",
            borderRadies: "1rem",
            borderColor: "primary.light",
          },
        }}
      >
        <Typography sx={{ p: 2 }}>{tech.description}</Typography>
      </Popover>
    </>
  );
};

export default IconDesc;
