import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Feed } from "./Feed.tsx";
import "./index.css";
import { GlobalHeader } from "./GlobalHeader.tsx";
import { PageNotFound } from "./PageNotFound.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Feed /> },
  { path: "*", element: <PageNotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalHeader />
    <RouterProvider router={router} />
  </React.StrictMode>
);
