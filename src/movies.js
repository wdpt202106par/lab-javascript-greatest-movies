// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    return arr.map(movie => movie.director);
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    return arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let rateArr = arr.map(movie => movie.rate || 0)
    console.log(rateArr);

    let myLength = rateArr.length;
    console.log(myLength)

    let sumRate = rateArr.reduce((acc, averageRate) => acc + averageRate);
    console.log(sumRate);

    let average = sumRate / myLength
    console.log(average)

    return Number(average.toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) { 

    let dramaMoviesArr = arr.filter(movie => movie.genre.includes("Drama"));
    console.log(dramaMoviesArr);

    if (dramaMoviesArr.length === 0) {
        return 0;
    }

    let ratedramaMoviesArr = dramaMoviesArr.map(movie => movie.rate)
    console.log(ratedramaMoviesArr);

    let myLength = ratedramaMoviesArr.length;
    console.log(myLength)

    let sumRate = ratedramaMoviesArr.reduce((acc, averageRate) => acc + averageRate);
    console.log(sumRate);

    let average = sumRate / myLength
    console.log(average)

    return Number(average.toFixed(2));
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/*function orderByYear(arr){
    let arrayCopy = arr.slice();
    return arrayCopy.sort(function (a,b) {
      if (a.year < b.year) return -1;
      if (a.year > b.year) return 1;
      if (a.year === b.year) return 0;
  })
}*/

function orderByYear(arr){
  let arrayCopy = arr.slice();
  return arrayCopy.sort(function (a,b) {
      //1. Compare les années
      if (a.year < b.year) return -1;
      if (a.year > b.year) return 1;
      if (a.year === b.year){
        console.log(a.year, b.year, a.title, b.title)
        console.log(a.title < b.title)
        console.log(a.title < b.title)
        console.log(a.title === b.title)
        //2. Compare les titres
        if(a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        if (a.title === b.title) return 0;
      } 
  })
  //console.log(arrayCopy)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
    let arrayCopy = arr.slice();
    arrayCopy.sort(function (a,b) {
      if(a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      if (a.title === b.title) return 0;
  })
  
  return arrayCopy.length < 20 ? arrayCopy.map(movie => movie.title) : arrayCopy.map(movie => movie.title).slice(0,20);   
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
