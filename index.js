const elementCard = document.getElementById('container-card');
const allMovies = 18;

const fetchGhibli = () => {
  const baseURL = `https://ghibliapi.herokuapp.com/Films/`;

  fetch(baseURL).then(response => {
    return response.json();

  }).then(dataGhibli => {
    const movie = dataGhibli.map((result) => ({
      id: result.id,
      title: result.title,
      director: result.director,
      release_date: result.release_date,
      description: result.description.substring(0, 400),
    }));
    showMovie(movie);
  });
}
fetchGhibli();

const showMovie = (movie) => {
  console.log(movie)
  const createMovie = movie.map((movies) => 
    `<li class="card">
      <span class='title'>${movies.title}</span>
      <p class="about">${movies.description}...</p>
      <div class="container-image">
        <img src="images/images.png" class="card-image" alt="totoro-image">
      </div>
      <span class="info-movie">Director: ${movies.director} - Year ${movies.release_date}</span>
    </li>
    `
  ).join('');
  elementCard.innerHTML = createMovie;
}

