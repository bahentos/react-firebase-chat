import { Outlet, Route, Routes } from "react-router-dom";
import s from "./App.module.scss";
import AppRouter from "./components/AppRouter/AppRouter";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className={s.appWrapper}>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
