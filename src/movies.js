
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  let directors = movies.map(function (movie) {
    return movie.director;
  });
  return directors;
}
console.log(getAllDirectors(movies));


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies) {
  let steven = movies.filter(function (newFilms) {
    return newFilms.director === "Steven Spielberg";
  });
  let drama = steven.filter(function (newFilms) {
    return newFilms.genre.indexOf("Drama") !== -1;
  });
  return drama.length;
}

console.log(howManyMovies(movies));
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let result = movies.reduce(function (sum, movie) {
    return sum + movie.rate;
  }, 0);

  let average = result / movies.length;
  return Number(average.toFixed(2));
}

console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(movies) {
  let movie = movies.filter(function (newFilms) {
    return newFilms;
  });
  let drama = movie.filter(function (newFilms) {
    return newFilms.genre.indexOf("Drama") !== -1;
  });
  let dramaMovieSum = drama.reduce(function (sum, movie) {
    return sum + movie.rate;
  }, 0);
  let dramaMovieAverage = dramaMovieSum / drama.length;

  return Number(dramaMovieAverage.toFixed(2));
}

console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movie) {
  let movieOrder = movies.sort(function (a, b) {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if (b.year === 0) return 0;
  });
  return movieOrder;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movie) {
  let titleOrder = movie.sort(function (a, b) {
    if (a.title > b.tittle) return 1;
    if (a.title < b.title) return -1;
    if (b.title === 0) return 0;
  });
  return titleOrder.slice(0, 20);
}

console.log(orderAlphabetically(movies));

  
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
