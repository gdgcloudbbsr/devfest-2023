import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import Register from "./Pages/Register";
import { Toaster } from "react-hot-toast";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={AppRouter} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ fontSize: "0.9rem", zIndex: "999999" }}
      />
    </Provider>
  </React.StrictMode>
);
