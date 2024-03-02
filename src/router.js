import { useRoutes } from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/Home";

export default function Router () {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Home /> },
            ]
        }
    ])
}
// import 