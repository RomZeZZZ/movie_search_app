async function getMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGNmNzE0OTYzZjdmYTAzZWJkNjgyMWM2Yzc3YzcwYSIsInN1YiI6IjY1NjhiODA0NjM1MzZhMDBlMWY5OTJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ee45NWPj2Zu_vNSPEA6NX_FCNWKuskngJ5hRrTEWE6E',
    },
  };

  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=ru-RU',
      options
    );

    const data = await response.json();
    console.log(data); // Log the data for debugging purposes

    return data; // Return the actual data
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it in the component
  }
}
export default getMovies;
