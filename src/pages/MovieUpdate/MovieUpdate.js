import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiMoviesById, apiUpdateMovieById } from "../../components/api";
import { toast } from "react-toastify";
import {
  UpdateContainer,
  UpdateCard,
  UpdateForm,
  Input,
  TextArea,
  Button,
  Label,
} from "./MoveUpdate.styled";

export default function MovieUpdate() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState({
    title: "",
    overview: "",
    release_date: "",
    vote_average: "",
  });

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movie = await apiMoviesById(movieId);
        console.log(movie);
        
        setMovieData({
          title: movie.title,
          overview: movie.overview,
          release_date: movie.release_date.split("T")[0], // Format date
          vote_average: movie.vote_average,
        });
      } catch (error) {
        toast.error("Failed to load movie data!");
      }
    }
    fetchMovie();
  }, [movieId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      ...movieData,
      vote_average: parseFloat(movieData.vote_average), // Ensure it's a float
    };

    try {
      await apiUpdateMovieById(movieId, updatedData);
      toast.success("Movie updated successfully!");
      navigate(`/movies/${movieId}`);
    } catch (error) {
      toast.error("Failed to update movie!");
    }
  };

  return (
    <UpdateContainer>
      <UpdateCard>
        <UpdateForm onSubmit={handleSubmit}>
          <Label>Title:</Label>
          <Input
            type="text"
            name="title"
            value={movieData.title}
            onChange={handleChange}
            required
          />
          <Label>Overview:</Label>
          <TextArea
            name="overview"
            value={movieData.overview}
            onChange={handleChange}
            required
          />
          <Label>Release Date:</Label>
          <Input
            type="date"
            name="release_date"
            value={movieData.release_date}
            onChange={handleChange}
            required
          />
          <Label>Rating:</Label>
          <Input
            type="number"
            name="vote_average"
            value={movieData.vote_average}
            onChange={handleChange}
            min="0"
            max="10"
            required
          />
          <Button type="submit">Update Movie</Button>
        </UpdateForm>
      </UpdateCard>
    </UpdateContainer>
  );
}
