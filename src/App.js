import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import TvShows from "./pages/tv";
import Sports from "./pages/sports";
import Movies from "./pages/movies";
import PageNotFound from "./pages/pageNotFound";
import SignUp from "./pages/signUp";
import SearchPage from "./pages/search";
import MovieView from "./pages/movieView";
import RootLayout from "./pages/rootLayout";
import LandPage from "./pages/landPage";
import LifeCycleMethods from "./pages/lifeCycleMethods";
import Edit from "./pages/edit";
import UseCallback from "./pages/useCallback";
import Login from "./pages/login";
import AuthenticationPage, {
  action as authentication,
} from "./pages/authenticationPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "login",
      element: <AuthenticationPage />,
      action: authentication,
    },
    {
      path: "ten-am-batch",
      element: <RootLayout />,
      errorElement: <PageNotFound />,
      children: [
        { path: "", element: <LandPage /> },
        { path: "home", element: <Home /> },
        { path: "shows", element: <TvShows /> },
        { path: "sports", element: <Sports /> },
        {
          path: "movies",
          element: <Movies />,
          children: [{ path: ":movieName/:id", element: <MovieView /> }],
        },
        { path: "signup", element: <SignUp /> },
        { path: "/edit/:userId", element: <Edit /> },
        { path: "search", element: <SearchPage /> },
        { path: "lifecycle", element: <LifeCycleMethods /> },
        { path: "callback", element: <UseCallback /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
