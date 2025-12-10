//Bỏ cách này áp dụng lazy routing
// import HomeTemplate from "../pages/HomeTemplate"
// import Home from "../pages/HomeTemplate/Home"
// import About from "../pages/HomeTemplate/About"
// import ListMovie from "../pages/HomeTemplate/ListMovie"
// import DetailMovie from "../pages/HomeTemplate/DetailMovie"
// import Hooks from "../pages/HomeTemplate/Hooks"

// import AdminTemplate from "../pages/AdminTemplate"
// import Dashboard from "../pages/AdminTemplate/DashBoard"
// import AddUser from "../pages/AdminTemplate/AddUser"
// import Auth from "../pages/AdminTemplate/Auth"

//import PageNoteFound from "../pages/PageNotFound"

import { lazy } from "react";

import { Route } from "react-router-dom"

const routes = [
    {
        path: "",
        element: lazy(() => import("../pages/HomeTemplate")),
        nested: [
            {
                path: "",
                element: lazy(() => import("../pages/HomeTemplate/Home")),
            },
            {
                path: "about",
                element: lazy(() => import("../pages/HomeTemplate/About")),
            },
            {
                path: "list-movie",
                element: lazy(() => import("../pages/HomeTemplate/ListMovie"))
            },
            {
                path: "hooks",
                element: lazy(() => import("../pages/HomeTemplate/Hooks")),
            },
            {
                path: "detail-movie/:id",
                element: lazy(() => import("../pages/HomeTemplate/DetailMovie")),
            }
        ]
    },
    {
        path: "admin",
        element: lazy(() => import("../pages/AdminTemplate")),
        nested: [
            {
                path: "dashboard",
                element: lazy(() => import("../pages/AdminTemplate/Dashboard")),
            },
            {
                path: "add-user",
                element: lazy(() => import("../pages/AdminTemplate/AddUser")),
            }
        ]
    },
    {
        path: "*",
        element: lazy(() => import("../pages/PageNotFound")),
    },
    {
        path: "auth",
        element: lazy(() => import("../pages/AdminTemplate/Auth")),
    }
]

const renderRoute = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map((nestRoute) => (
                        <Route key={nestRoute.path} path={nestRoute.path} element={<nestRoute.element />} />

                    ))}
                </Route>
            )
        } else {
            return <Route key={route.path} path={route.path} element={<route.element />} ></Route>
        }
    })
};

export default renderRoute;