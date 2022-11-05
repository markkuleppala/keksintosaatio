import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDW45idbSM_Oa84b3Z2PFYIwJpNagDusHU",
  authDomain: "junction-keksintosaatio.firebaseapp.com",
  projectId: "junction-keksintosaatio",
  storageBucket: "junction-keksintosaatio.appspot.com",
  messagingSenderId: "332732375575",
  appId: "1:332732375575:web:bcf22469e6a9072ecef252",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
