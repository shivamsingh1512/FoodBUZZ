import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import About from "./components/about";
import Offer from "./components/offer";
import Error from "./components/errorhandle";

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
};

const appRoute = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
    },
    {
        path:"/about",
        element:<About />,
    },
    {
        path:"/offers",
        element:<Offer />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute}/>);


