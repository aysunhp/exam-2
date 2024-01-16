import UserRoot from "../pages/UserRoot";
import Home from "../pages/home"
import AboutUs from "../pages/aboutUs"
import Contact from "../pages/aboutUs"
import News from "../pages/News"
import Restaurant from "../pages/Restaurant" 
import Basket from "../pages/Basket"
import Wishlist from "../pages/Wishlist" 

const routes=[
    {
        path: "/",
        element:  <UserRoot/>,
        children: [
            {
                path: "/",
                element: <Home/>, 
            },
            {
                path: "/about",
                element: <AboutUs/>, 
            },
            {
                path: "/contact",
                element: <Contact/>, 
            },
            {
                path: "/news",
                element: <News/>, 
            },
            {
                path: "/restaurant",
                element: <Restaurant/>, 
            },
            {
                path: "/news",
                element: <News/>, 
            },
            {
                path: "/basket",
                element: <Basket/>, 
            },
            {
                path: "/wishlist",
                element: <Wishlist/>, 
            },
          ],
    }
]

export default routes;