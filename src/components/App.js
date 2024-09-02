import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const Details = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const MovieUpdate = lazy(() => import("../pages/MovieUpdate/MovieUpdate"));

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Details />}/>
        <Route path="moviesupdate/:movieId" element={<MovieUpdate />}/>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
