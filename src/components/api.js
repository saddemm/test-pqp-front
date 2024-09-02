import axios from "axios";

const URLTest = "http://localhost:2525/api/moviess";

export default async function getApi() {
  const data = await axios.get(`${URLTest}?pagination=false`);

  return data.data;
}
export async function apiSearchMovies(query, page) {
  const data = await axios.get(
    `${URLTest}?title=${query}&page=${page}`
  );
  console.log(data.data)
  console.log(data.data['hydra:member'])
  return data.data;
}

export async function apiMoviesById(id) {
  // const data3 = await axios.get(`${URL}/movie/${id}?api_key=${KEY}`);
  const data = await axios.get(`${URLTest}/${id}`);
  // console.log(data3);
  console.log(data);

  return data.data;
}
export async function apiUpdateMovieById(id, updatedData) {
  try {
    const response = await axios.put(`${URLTest}/${id}`, updatedData, {
      headers: {
        'Content-Type': 'application/ld+json',
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to update the movie:", error);
    throw error;
  }
}


export async function apiDeleteMovieById(id) {
  try {
    const response = await axios.delete(`${URLTest}/${id}`);
    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Error deleting movie:", error);
    throw error; 
  }
}