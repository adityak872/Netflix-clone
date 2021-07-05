const API_KEY = "a9774a8039a16ea6f4d4b2c48fe199ed";

const requests = {
  fetchTrending:
    "/trending/all/week?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&language=en-US",
  fetchNetflixOriginals:
    "/discover/tv?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&with_networks=213",
  fetchTopRated: 
    `/movie/upcoming?api_key=${API_KEY}`,
  fetchAction:
    "/discover/movie?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&with_genres=28",
  fetchComedy:
    "/discover/movie?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&with_genres=35",

  fetchHorror:
    "/discover/movie?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&with_genres=27",
  fetchRomance:
    "/discover/movie?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&with_genres=10749",

  fetchDocumentaries:
    "/discover/movie?api_key=a9774a8039a16ea6f4d4b2c48fe199ed&with_genres=99",
};

export default requests;
