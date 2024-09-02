import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import getApi from "../../components/api";
import { apiDeleteMovieById } from "../../components/api";
import { toast } from "react-toastify";
import {
  MoviesContainer,
  MoviesTitle,
  Container,
} from "../HomePage/HomePage.styled";

export default function HomePage() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    if (trending.length > 0) {
      return;
    }

    async function api() {
      try {
        const data = await getApi();        
        setTrending(data['hydra:member']);
      } catch (error) {
        toast.error("Oups, quelque chose s'est mal passé ! Rechargez cette page !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    api();
  }, [trending]);
   
    const handleDelete = async (id) => {
      try {
        await apiDeleteMovieById(id);
        setTrending(trending.filter(movie => movie.id !== id)); 
      } catch (error) {
        console.error("Failed to delete the movie:", error);
      }
    };

  return (
    <Container>
      <MoviesContainer>
        <MoviesTitle>Trending</MoviesTitle>
        <MoviesList movies={trending} onDelete={handleDelete} />
      </MoviesContainer>
    </Container>
  );
}
