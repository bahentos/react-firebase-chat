import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB88dzwW2iPQZHCyw0gydot3tfiP7fyY3M",
  authDomain: "chat-react-aa95c.firebaseapp.com",
  projectId: "chat-react-aa95c",
  storageBucket: "chat-react-aa95c.appspot.com",
  messagingSenderId: "643932248133",
  appId: "1:643932248133:web:2000204c118801f68bab2c",
  measurementId: "G-34KJTHW15G",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);
root.render(
  <BrowserRouter>
    <Context.Provider
      value={{
        firebase,
        auth,
        firestore,
      }}
    >
      <App />
    </Context.Provider>
  </BrowserRouter>
);
