import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
//import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { FaPhoenixSquadron } from "react-icons/fa";
//import SearchIcon from "@mui/icons-material/Search";
//import InputBase from "@mui/material/InputBase";
import { AuthContext, auth } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { signOut } from "firebase/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { orange } from "@mui/material/colors";
const pages = ["Home", "About", "SignIn", "SignUp"];
const pagesRight = ["Home", "About"];
const settings = ["NewBlog", "Profile", "Logout"];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const { setGoogle } = React.useContext(BlogContext);

  const { currentUser } = React.useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleNavigation = (setting) => {
    if (setting === "SignIn") {
      navigate("/signIn");
    } else if (setting === "SignUp") {
      navigate("/signUp");
    } else if (setting === "Home") {
      navigate("/home");
    } else if (setting === "About") {
      navigate("/about");
    } else {
      navigate("/");
    }
  };
  const handleNavigationMenu = (setting) => {
    if (setting === "Home") {
      navigate("/home");
    } else if (setting === "About") {
      navigate("/about");
    } else {
      navigate("/");
    }
  };
  const handleNavigationLogin = (setting) => {
    if (setting === "NewBlog") {
      navigate("/newblog");
    } else if (setting === "Profile") {
      navigate("/profile");
    } else if (setting === "Logout") {
      signOut(auth);
      setGoogle(false);
      navigate("/");
    }
  };

  // const Search = styled("div")(({ theme }) => ({
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(1),
  //     width: "auto",
  //   },
  // }));

  // const SearchIconWrapper = styled("div")(({ theme }) => ({
  //   color: "white",
  //   padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }));

  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: "white",
  //   "& .MuiInputBase-input": {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create("width"),
  //     width: "100%",
  //     [theme.breakpoints.up("sm")]: {
  //       width: "12ch",
  //       "&:focus": {
  //         width: "20ch",
  //       },
  //     },
  //   },
  // }));
  return (
    <AppBar position="static" sx={{ bgcolor: "#01579b", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            onClick={() => navigate("/")}
          >
            <FaPhoenixSquadron style={{ color: "white", fontSize: "30px" }} />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "white",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              {pagesRight.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => handleNavigation(setting)}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "white",
            }}
          >
            Sehenswürdigkeit's Blog
            {/* <FaPhoenixSquadron style={{ color: "white", fontSize: "30px" }} /> */}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {currentUser
              ? pagesRight.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handleNavigationMenu(page)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))
              : pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handleNavigation(page)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
          </Box>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
            />
          </Search> */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Bety Byd" sx={{ bgcolor: orange[400] }}>
                  {!currentUser ? (
                    <AccountCircleIcon />
                  ) : currentUser.displayName > 2 ? (
                    currentUser.displayName[0]
                  ) : currentUser ? (
                    currentUser.displayName
                  ) : (
                    "bb"
                  )}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser
                ? settings.map((setting, index) => (
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => handleNavigationLogin(setting)}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))
                : pages.map((setting, index) => (
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => handleNavigation(setting)}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
