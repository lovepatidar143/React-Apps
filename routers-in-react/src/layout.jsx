import { Outlet } from "react-router-dom";

import {
    Header,
    Footer
} from "./components/index.js";

export default function Layout() {
    return (

<>
            <Header />
            <Outlet />
            <Footer />

</>
    );
}