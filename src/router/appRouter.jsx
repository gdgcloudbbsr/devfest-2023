import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  Home,
  Error404,
  Register,
  Tickets,
  Schedule,
  Sponsorship,
  Contact,
  Speakers,
  Dashboard,
  Team,
} from "../Pages/index";

import PrivateRouter from "./PrivateRouter";

const Router = {
  home: "/",
  register: "/register",
  tickets: "/tickets",
  schedule: "/schedule",
  sponsorship: "/sponsorship",
  contact: "/contact",
  speakers: "/speakers",
  team: "/team",
  dashboard: "/dashboard",
  error: "*",
};

const appRouter = createBrowserRouter([
  {
    path: Router.home,
    element: <App />,
    children: [
      {
        path: Router.home,
        element: <Home />,
      },
      {
        path: Router.tickets,
        element: <Tickets />,
      },
      {
        path: Router.schedule,
        element: <Schedule />,
      },
      {
        path: Router.sponsorship,
        element: <Sponsorship />,
      },
      {
        path: Router.contact,
        element: <Contact />,
      },
      {
        path: Router.speakers,
        element: <Speakers />,
      },
      {
        path: Router.team,
        element: <Team />,
      },
    ],
  },
  {
    path: Router.error,
    element: <Error404 />,
  },
  {
    path: Router.register,
    element: <Register />,
  },
  {
    path: Router.dashboard,
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
  },
]);

export { Router };

export default appRouter;
