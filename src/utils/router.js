import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Chat from "../components/Chat/Chat";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "chat",
        element: <Chat />,
      },
    ],
  },
]);
