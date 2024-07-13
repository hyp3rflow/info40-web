import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "@panda/styles.css";
import "simple-reveal/index.css";
import FormRoute from "./routes/FormRoute.tsx";
import EventRoute from "./routes/EventRoute.tsx";
import Layout from "./routes/Layout.tsx";
import MainRoute from "./routes/MainRoute.tsx";
import NoticeRoute from "./routes/NoticeRoute.tsx";
import CommentRoute from "./routes/CommentRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainRoute />,
      },
      {
        path: "/form",
        element: <FormRoute />,
      },
      {
        path: "/event",
        element: <EventRoute />,
      },
      {
        path: "/notice",
        element: <NoticeRoute />,
      },
      {
        path: "/comment",
        element: <CommentRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
