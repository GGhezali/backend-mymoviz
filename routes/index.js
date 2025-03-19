var express = require("express");
var router = express.Router();

router.get("/movies", (req, res) => {
  /*
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzU0NjA3ODcwM2I1ZWQxMzE5YjNjZjk5ZjUyNzg5MyIsIm5iZiI6MTc0MjM3MzQ4My4xMTgsInN1YiI6IjY3ZGE4MjZiNmI0OTAyNWViOGExZjMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OKBCEbBLuc2vkShpHh4Lqi2KHK_MrgEJ72K4MLexAGg'
      }
    };
    
    fetch(url, options)
      .then(response => response.json())
      .then(data => res.json({data}))
      .catch(err => console.error(err));
    */
  //--------------------------------------------------------------------

  //const TMDB_API_KEY = "0c546078703b5ed1319b3cf99f527893";
  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
    .then((response) => response.json())
    .then((data) => res.json({ movies : data.results }));
});

module.exports = router;
