import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from ".";
import s from "./App.module.scss";
import AppRouter from "./components/AppRouter/AppRouter";
import Loader from "./components/AppRouter/Loader";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={s.appWrapper}>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
