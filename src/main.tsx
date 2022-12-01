import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "../lib/global-style";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import styled from "styled-components";
import { RecoilRoot } from "recoil";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "fashion",
        element: <div>fashion</div>,
      },
      {
        path: "accessory",
        element: <div>accessory</div>,
      },
      {
        path: "digital",
        element: <div>digital</div>,
      },
      {
        path: "cart",
        element: <div>cart</div>,
      },
      {
        path: "product/:id",
        element: <div>product</div>,
        errorElement: <div>404</div>,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
