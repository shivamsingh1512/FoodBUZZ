import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from "./components/about";
import RestaurantMenu from "./components/RestaurantMenu";
import Offer from "./components/offer";
import Error from "./components/errorhandle";

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};

const appRoute = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path: "/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/offers",
                element:<Offer />,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            }
        ],
        errorElement:<Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute}/>);


