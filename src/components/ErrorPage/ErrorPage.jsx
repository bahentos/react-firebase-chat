import { useRouteError } from "react-router-dom";
import s from "./ErrorPage.module.scss";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={s.container} id="error-page">
      <h1>😘</h1>
      <p>Извините, произошла непредвиденная ошибка</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
