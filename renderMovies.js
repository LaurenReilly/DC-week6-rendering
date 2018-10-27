
function renderMovies(movies) {
    var finalHTML = movies.map(function(movie) {
        var rottenPercentage = movie.rottenTomatoesRating * 100;
        return `
        <div class="d-flex p-3 border rounded m-auto" style="background-color: grey; width: 600px;">
            <img src="${movie.poster}" alt="">
            <div class="d-flex flex-column justify-content-between mx-5 mt-3 border rounded" style="background-color: white">
                <div>
                    <h3><b>${movie.title}</b></h3>
                    <h4>${movie.year}</h4>
                </div>
                <div>
                    <h3>IMDB Rating:</h3>
                    <h4>${movie.imdbRating}/10</h4>
                </div>
                <div>
                    <h3>Rotten Tomatoes:</h3>
                    <h4>${rottenPercentage}%</h4>
                </div>
            </div>
        </div> 
        `
    });
    return finalHTML.join("");
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}