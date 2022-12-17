import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <div class={s.ldsHourglass}></div>
        <Grid container alignItems={"center"} direction={"column"}></Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
