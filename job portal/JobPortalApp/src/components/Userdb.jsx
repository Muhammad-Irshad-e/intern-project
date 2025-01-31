import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography, useMediaQuery, useTheme, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import Menu Icon
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import './Userdbs.css'
import Userprofile from "./Userprofile";

const Userdb = () => {
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown menu
  const open = Boolean(anchorEl); // Check if the menu is open

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Detects small screens


  // Handle Dropdown Menu Click
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle Dropdown Menu Close
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
      <AppBar component="nav">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
          {isSmallScreen && (
            <IconButton
              id="basic-button"
              color="inherit"
              aria-label="open drawer"
              edge="start"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>View Applied Jobs</MenuItem>
              <MenuItem onClick={handleClose}>Browse Jobs</MenuItem>
            </Menu>
          </div>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Dashboard
          </Typography>

          {/* Navigation Buttons (Hidden on Small Screens) */}
          {!isSmallScreen && (
            <Box className="menu" sx={{ display: "flex", gap: 2 }}>
              <Button sx={{ color: "#fff" }}>View Applied Jobs</Button>
              <Button sx={{ color: "#fff" }}>Browse Jobs</Button>
             
            </Box>
          )}

          <Button sx={{ color: "#fff",marginLeft:5 }}>Logout</Button>
          
          <Link to="/userprofile" >
            <Avatar className="profile-pic" src="/profile-user.png" sx={{ ml: 2 }} />
          </Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path='/userprofile' element={<Userprofile/>} />
      </Routes>
    </div>
  );
};

export default Userdb;
