import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import About from "../Pages/About/About";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout/DashboardLayout";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import MyOrderList from "../Pages/Dashboard/MyOrderList/MyOrderList";
import Review from "../Pages/Dashboard/Review/Review";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import Payment from "../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Main />,
        errorElement : <DisplayError/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "/signup",
                element : <SignUp />
            },
            {
                path : "/about",
                element : <PrivateRoute><About /></PrivateRoute>
            },
            // {
            //     path : "/order/:id",
            //     element : <Order />,
            //     loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)

            // }
        ]
    },
    {
        path : "/dashboard",
        element : <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement : <DisplayError/>,
        children : [
            {
                path : "/dashboard",
                element : <MyOrder />
            },
            {
                path : "/dashboard/myorderlist",
                element : <MyOrderList />
            },
            {
                path : "/dashboard/review", 
                element : <Review />
            },
            {
                path : "/dashboard/allusers", 
                element : <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path : "/dashboard/payment/:id", 
                element : <Payment/>,
                loader : ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }
]);

export default router;