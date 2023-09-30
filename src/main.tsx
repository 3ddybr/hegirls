import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Card1Desc from "./routes/Card1Desc/index.tsx";
import Card2Desc from "./routes/Card2Desc/index.tsx";
import Card3Desc from "./routes/Card3Desc/index.tsx";
import Card4Desc from "./routes/Card4Desc/index.tsx";
import Carrousel from "./components/Carrousel/index.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/brecho1",
//     element: <Card1Desc />,
//   },
//   {
//     path: "/brecho2",
//     element: <Card2Desc />,
//   },
//   {
//     path: "/brecho3",
//     element: <Card3Desc />,
//   },
//   {
//     path: "/brecho4",
//     element: <Card4Desc />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Carrousel />,
      },
      {
        path: "/brecho1",
        element: <Card1Desc />,
      },
      {
        path: "/brecho2",
        element: <Card2Desc />,
      },
      {
        path: "/brecho3",
        element: <Card3Desc />,
      },
      {
        path: "/brecho4",
        element: <Card4Desc />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
