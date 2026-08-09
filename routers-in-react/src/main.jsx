import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

import "./index.css";

import {
  About,
    Home,
    Contact

} from "./components/index.js";

import Layout from "./layout.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about/" element = {<About />} /> 

        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);