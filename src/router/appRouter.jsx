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
  TermsAndCondition,
  PrivacyPolicy,
  RefundPolicy,
  DeliveryPolicy,
  CFP,
  CheckOut,
} from "../Pages/index";

import PrivateRouter from "./PrivateRouter";
// import TicketTemplatePdf from "../Components/TicketTemplatePdf";

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
  paymentLink: "#",
  termsAndCondition: "/terms_and_condition",
  privacyPolicy: "/privacy_policy",
  refundPolicy: "/refund_policy",
  delivery: "/delivery",
  cfp: "/cfp",
  myTickets: "/my_tickets",
  checkout: "/ticket/checkout",
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
      {
        path: Router.termsAndCondition,
        element: <TermsAndCondition />,
      },
      {
        path: Router.privacyPolicy,
        element: <PrivacyPolicy />,
      },
      {
        path: Router.refundPolicy,
        element: <RefundPolicy />,
      },
      {
        path: Router.delivery,
        element: <DeliveryPolicy />,
      },
      {
        path: Router.cfp,
        element: <CFP />,
      },
      {
        path: Router.myTickets,
        element: (
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        ),
      },
      {
        path: Router.checkout,
        element: <CheckOut />,
      },
      // {
      //   path: "/demo",
      //   element: <TicketTemplatePdf />,
      // },
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
