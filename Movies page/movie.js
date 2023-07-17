//tiles:http://www.omdbapi.com/?s=Dilwale&apikey=47c4bda1
//details:http://www.omdbapi.com/?t=Dilwale&apikey=47c4bda1

const movieSearchBox =document.getElementById('movie-search-box');
const searchList=document.getElementById('search-list');
const resultGrid=document.getElementById('result-grid');

async function loadMovies(searchTerm) {
    const URL=`https://www.omdbapi.com/?s=${searchTerm}&apikey=47c4bda1`;
    const res = await fetch(`${URL}`);
    const data=await res.json();
    //console.log(data.Search);
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMovies() {
    let searchTerm = (movieSearchBox.value).trim();
    //console.log(searchTerm);
    if(searchTerm.length>0){
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    }
    else{
        searchList.classList.add('hide-search-list');
    }
}
function displayMovieList(movies) {
    searchList.innerHTML = "";
    for(let idx = 0; idx < movies.length; idx++){
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id=movies[idx].imdbID;
        movieListItem.classList.add('search-list-item');
        if(movies[idx].Poster != "N/A")
            moviePoster = movies[idx].Poster;
        else
            moviePoster="image_not_found.png";
        
        movieListItem.innerHTML = `
        <div class = "search-item-thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item-info">
            <h3>${movies[idx].Title}</h3>
            <p>${movies[idx].Year}</p>
        </div>`;
        searchList.appendChild(movieListItem);
    }
    loadMovieDetails();
}

function loadMovieDetails() {
    const searchListMovies=searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(movie =>{
        movie.addEventListener('click',async() =>{
            //console.log(movie.dataset.id);
            searchList.classList.add('hide-search-list');
            movieSearchBox.value = "";
            const result = await fetch(`https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=47c4bda1`);
            const movieDetails = await result.json();
            //console.log(movieDetails);
            displayMovieDetails(movieDetails);
        });
    });
}
function displayMovieDetails(details) {
    resultGrid.innerHTML=`
    <div class="movie-poster">
    <img src="${(details.Poster != "N/A") ? details.Poster : "image_not_found.png"}" alt="movie poster">
    </div>
    <div class ="movie-info">
        <h3 class="movie-title">${details.Title}</h3>
        <ul class="movie-misc-info">
            <li class ="year">${details.Year}</li>
            <li class ="Released">Realeased: ${details.Released}</li>
        </ul>
        <p class="Director"><b>Director:</b>${details.Director}</p>
        <p class="Genre"><b>Genre:</b>${details.Genre}</p>
        <p class="imdbRating"><b>imdb:</b>${details.imdbRating}</p>
        <p class="language"><b>Language:</b> ${details.Language}</p>
        <p class="Plot"><b>Plot:</b> ${details.Plot}</p>
    </div>
    `;
}

window.addEventListener('click', (event) => {
    if(event.target.className != "form-control"){
        searchList.classList.add('hide-search-list');
    }
});


// scroll to top
// Get the button element
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}