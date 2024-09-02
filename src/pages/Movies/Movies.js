import { Container, MoviesContainer } from "../Movies/Movies.styled";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { apiSearchMovies } from "../../components/api";
import MoviesList from "../../components/MoviesList/MoviesList";
import Button from "../../components/ButtonLoadMore/Button";
import Loader from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useCallback } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [hasMore, setHasMore] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true); // New state to track initial load

  const query = searchParams.get("query") ?? "";

  const fetchMovies = useCallback(async () => {
    if (!query) return;
    try {
      setLoading(true);
      setError(false);

      const data = await apiSearchMovies(query, page);
      
      const totalPage = Math.ceil(data['hydra:totalItems'] / data['hydra:member'].length);

      setMovies((prevMovies) => (page === 1 ? [...data['hydra:member']] : [...prevMovies, ...data['hydra:member']]));
      
      setHasMore(page < totalPage && data['hydra:member'].length > 0);

      if (page === 1) { // Initial load
        if (data['hydra:totalItems'] === 0) {
          toast.info("Sorry, we couldn't find any movies matching your search.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.success(`Hooray! We've found ${data['hydra:totalItems']} movies!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "light",
          });
          setInitialLoad(false); // Set initial load to false after first search
        }
      }

    } catch (error) {
      setError(true);
      toast.error("Oops, something went wrong! Reload this page!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // Fonction pour détecter le défilement
  const handleScroll = () => {
    if (loading || !hasMore) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 100) { // Déclenche avant d'atteindre le bas complet
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, hasMore]);

  const getSearchMovies = (e) => {
    e.preventDefault();

    const queryEl = e.target.search.value;

    if (queryEl === "") {
      toast.info("Saisissez votre demande, s'il vous plaît !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (queryEl === query) {
      toast.info("Saisissez une nouvelle demande, s'il vous plaît !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const searchedMovie = queryEl !== "" ? { query: queryEl } : {};
    setSearchParams(searchedMovie);
    setPage(1);
    setMovies([]);
    setHasMore(true); // Réinitialiser pour la nouvelle recherche
    setInitialLoad(true); // Reset initial load state
  };

  return (
    <Container>
      <SearchBar value={query} onSearch={getSearchMovies} />
      {movies.length > 0 && (
        <MoviesContainer>
          <MoviesList movies={movies} />
        </MoviesContainer>
      )}
      {loading && <Loader />}
      {error && toast.error("Oups, quelque chose s'est mal passé ! Rechargez cette page !")}
    </Container>
  );
}
