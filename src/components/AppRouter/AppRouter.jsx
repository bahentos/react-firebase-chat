import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import s from "./AppRouter.module.scss";

const AppRouter = () => {
  const user = false;
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => {
        <Route path={path} component={Component} />;
      })}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => {
        <Route path={path} component={Component} />;
      })}
    </Routes>
  );
};

export default AppRouter;
