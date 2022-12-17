import { Button, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import { Context } from "../..";
import firebase from "firebase/compat/app";
import s from "./Login.module.scss";

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };
  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid
          container
          alignItems={"center"}
          direction={"column"}
          style={{ width: 400, background: "#f9edc2" }}
        >
          <Box p={5}>
            <Button onClick={() => login()} variant="outlined">
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
