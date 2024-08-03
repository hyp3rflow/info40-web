import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "@panda/styles.css";
import "simple-reveal/index.css";
import FormRoute from "./routes/FormRoute";
import EventRoute from "./routes/EventRoute";
import Layout from "./routes/Layout";
import MainRoute from "./routes/MainRoute";
import GalleryRoute from "./routes/GalleryRoute";
import HistoryRoute from "./routes/HistoryRoute";
import CommentRoute from "./routes/CommentRoute";
import CommentListRoute from "./routes/CommentListRoute";
import WriteRoute from "./routes/WriteRoute";
import DonationRoute from "./routes/DonationRoute";

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
        path: "/history",
        element: <HistoryRoute />,
      },
      {
        path: "/donate",
        element: <DonationRoute />,
      },
      {
        path: "/gallery",
        element: <GalleryRoute />,
      },
      {
        path: "/comment",
        element: <CommentListRoute />,
      },
      {
        path: "/comment/:id",
        element: <CommentRoute />,
      },
      {
        path: "/write",
        element: <WriteRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
