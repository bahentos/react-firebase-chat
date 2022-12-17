import { redirect, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import Chat from "../Chat/Chat";
import Login from "../Login/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import s from "./AppRouter.module.scss";
import { useContext } from "react";
import { Context } from "../..";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => {
        <Route path={path} element={Component} />;
      })}
      <Route
        path="*"
        element={<Chat />}
        action={() => {
          redirect("/chat");
        }}
      />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => {
        <Route path={path} element={Component} />;
      })}
      <Route
        path="*"
        element={<Login />}
        action={() => {
          redirect("/chat");
        }}
      />
    </Routes>
  );
};

export default AppRouter;
