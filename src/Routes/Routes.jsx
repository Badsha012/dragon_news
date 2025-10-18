import { createBrowserRouter } from "react-router";

const router= createBrowserRouter(

    [
        {
            path:'/',
            element:<h2>Home Layout</h2>,
        },
        {
            path:'/auth',
            element:<h2>Authentication Layout</h2>
        },
        {
            path:'/news',
            element:<h1>News Layout</h1>
        },
        {
            path:'/*',
            element:<h2>Error Message</h2>
        }
    ]
)

export default router;