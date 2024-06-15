import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Feed } from "./Feed.tsx";
import "./index.css";
import { GlobalHeader } from "./GlobalHeader.tsx";
import { PageNotFound } from "./PageNotFound.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <Feed /> },
  { path: "*", element: <PageNotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalHeader />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
