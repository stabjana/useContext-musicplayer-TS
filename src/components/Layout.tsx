import {
  Box,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import MenuIcon from "@mui/icons-material/Menu";

const Layout = () => {
  // const theme = useTheme();
  const { toggleColorMode } = useContext(ThemeContext);

  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Home</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/player">Player</Link>
            </Typography>

            <Button color="inherit" onClick={toggleColorMode}>
              Toggle Theme
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </div>
  );
};

export default Layout;
