import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TwitterIcon from "@mui/icons-material/Twitter";
import { styled } from "@mui/material/styles";

const TitleLink = styled(Link)(() => ({
  color: "white",
  flexGrow: 1,
  textDecoration: "none",
}));

const MenuButtonLink = styled(Link)(({ theme }) => ({
  color: "white",
  display: "none",
  margin: theme.spacing(2),
  textDecoration: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const MenuToggle = styled(IconButton)(({ theme }) => ({
  display: "block",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <TitleLink to="/">
            <Typography variant="h5" noWrap>
              Brandon Jones
            </Typography>
          </TitleLink>
          <MenuButtonLink to="/about">
            <Button color="inherit">About</Button>
          </MenuButtonLink>
          <MenuButtonLink to="/contact">
            <Button color="inherit">Contact</Button>
          </MenuButtonLink>
          <MenuToggle
            color="inherit"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <MoreVertIcon />
          </MenuToggle>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/about">
              About
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/contact">
              Contact
            </MenuItem>
          </Menu>
          <SocialIcon
            aria-label="github"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/bjonesy"
          >
            <GitHubIcon />
          </SocialIcon>
          <SocialIcon
            aria-label="github"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/BrandonJ0nes"
          >
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon
            aria-label="linkedin"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/brandon-jones-57513b13/"
          >
            <LinkedInIcon />
          </SocialIcon>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
};

export default Header;
