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
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/consts";

const Navbar = () => {
  const user = false;
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
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
        <Grid style={{ gap: "1rem" }} container xs={12} justifyContent="end">
          {user ? (
            <Button variant={"outlined"} color="inherit">
              Выйти
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"} color="inherit">
                Логин
              </Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
