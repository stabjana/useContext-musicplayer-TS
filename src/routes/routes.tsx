import { RouteObject } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Player from "../pages/Player";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "player",
        element: <Player />,
      },
    ],
  },
];
