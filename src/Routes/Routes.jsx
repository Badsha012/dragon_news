import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router= createBrowserRouter(

    [
        {
            path:'/',
            element:<HomeLayout></HomeLayout>,
        },
        {
            path:'/auth',
            element:<h2>Authentication Layout</h2>,
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