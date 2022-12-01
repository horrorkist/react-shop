import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "../lib/global-style";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { RecoilRoot } from "recoil";
import Home from "./routes/Home";
import CategoryPage from "./routes/CategoryPage";

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
        element: <CategoryPage />,
        errorElement: <div>40404</div>,
      },
      {
        path: "accessory",
        element: <CategoryPage />,
      },
      {
        path: "digital",
        element: <CategoryPage />,
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
