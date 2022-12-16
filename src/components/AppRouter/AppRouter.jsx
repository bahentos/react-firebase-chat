import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import Chat from "../Chat/Chat";
import Login from "../Login/Login";
import s from "./AppRouter.module.scss";

const AppRouter = () => {
  const user = false;
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => {
        <Route path={path} element={Component} />;
      })}
      <Route path="*" element={<Chat />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => {
        <Route path={path} element={Component} />;
      })}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
