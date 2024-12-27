const API_KEY = "e7de9b0";

const movieName = document.querySelector(".input-js");
const movieForm = document.querySelector(".film-form");
const elMovieFragment = new DocumentFragment;
const movieTemplate = document.querySelector("template").content;
const elMovieList = document.querySelector(".movie-list");

function renderMovie (movies, node) {

  elMovieList.innerHTML = "";

  for (const item of movies) {

    const cloneMovie = movieTemplate.cloneNode(true);
    const movieImg = cloneMovie.querySelector(".movie-img");
    const movieName = cloneMovie.querySelector(".movie-name");
    const movieYear = cloneMovie.querySelector(".movie-year");

    movieImg.src = item.Poster;
    movieImg.alt = item.Title;
    movieName.textContent = item.Title;
    movieYear.textContent = item.Year;

    elMovieFragment.appendChild(cloneMovie);
  }

  node.appendChild(elMovieFragment);
}

// http://www.omdbapi.com/?apikey=[yourkey]&

movieForm.addEventListener("submit", (evt)=> {
  evt.preventDefault();

  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName.value}`)
  .then(res => res.json())
  .then(data => {
    console.log(data.Search);

    renderMovie(data.Search, elMovieList);
  });
});