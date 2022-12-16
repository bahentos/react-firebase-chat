import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./utils/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
