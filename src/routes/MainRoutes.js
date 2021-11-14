import HomePage from "../views/Homepage";
import MoviesPage from "../views/MoviesPage";


export const mainRoutes = [
    {
        name: "Home",
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        name: "Movies",
        path: "/movies",
        exact: false,
        component: MoviesPage
    }
]