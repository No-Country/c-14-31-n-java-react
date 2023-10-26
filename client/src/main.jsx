import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import Register from "./pages/register/Register";
import AboutUs from "./pages/aboutUs/AboutUs";
import Store from "./pages/store/Store";
import Faq from "./pages/faq/Faq";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/404/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/Faq",
    element: <Faq />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
