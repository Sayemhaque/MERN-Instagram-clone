import {
    createBrowserRouter,
} from "react-router-dom";
import Feed from "../components/Feed/Feed";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><Home /></PrivateRoute>,
        children: [
            {
                path: "/",
                element: <Feed />
            },
            {
                path: "/profile",
                element: <Profile />
            },

        ],
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }

])

export default router;