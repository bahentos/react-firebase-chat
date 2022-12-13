import { Outlet } from "react-router-dom";
import s from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className={s.appWrapper}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
