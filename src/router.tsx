import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About, Cv, Home } from "@/components";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: 'cv',
                element: <Cv />
            }
        ]
    }
])