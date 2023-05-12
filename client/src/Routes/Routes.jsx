import {
    createBrowserRouter,
} from "react-router-dom";
import Feed from "../components/Feed/Feed";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
   {
    path:"/",
    element:<Home/>,
    children:[
        {
            path:"/",
            element:<Feed/>
        },
        {
            path:"/profile",
            element:<Profile/>
        }
    ]
   }
])

export default router;