import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <Grid>
          {" "}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Chat
          </Typography>
        </Grid>
        <Grid justifyContent="end">
          <Button>Login</Button>
        </Grid>
        <Button>Chat</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
