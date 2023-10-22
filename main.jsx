import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./src/Store/Store";
import { Toaster } from "react-hot-toast";
import appRouter from "./src/router/appRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={appRouter} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ fontSize: "0.9rem", zIndex: "999999" }}
      />
    </Provider>
  </React.StrictMode>
);
