import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router= createBrowserRouter(

    [
        {
            path:'/',
            element:<HomeLayout></HomeLayout>,
            children:[
                {
                    path:'',
                    element:<Home></Home>
                },
                 {
                    path:'/category/:id',
                    element:<CategoryNews></CategoryNews>,
                    loader:()=> fetch("/news.json")
                },
            ]
        },
        {
            path:'/auth',
            element:<h2>Authentication Layout</h2>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>
                },
                {
                    path:"/auth/register",
                    element:<Register></Register>,

                }
            ]
        },
        {
            path:'/news',
            element:<h1>News Layout</h1>,
        },
        {
            path:'/*',
            element:<h2>Error Message</h2>,
        }
    ]
)

export default router;