
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {

    let allDirectors = moviesArray.map(movie => movie.director);
    return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// create a new array for directors names
//filter out only directors names to put in a new array
function unifyDirectorsName(array){
    let allDirectors = array.map(movie => movie.director);
    let uniqueNames = allDirectors.filter(function(name, index){
        return allDirectors.indexOf(name) === index;
    }) 
    return uniqueNames;
}console.log(unifyDirectorsName(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(list){

    let steven = list.filter(function(movie){
        return movie.director ==="Steven Spielberg"
    }) 
    let drama = steven.filter(function(movie){
        return movie.genre.indexOf('Drama') !==-1 
    }) 
    return drama.length
} 
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if (movies.length === 0){
        return 0
    }
    let sum = movies.reduce(function(acc, el){
        return (acc + el.rate);
    }, 0) 
    return Number((sum/movies.length).toFixed(2))
} 
console.log(ratesAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate (movies) {
    let dramaMovies = movies.filter(function(movie){
        return movie.genre.indexOf('Drama') !==-1});
      return ratesAverage (dramaMovies);
  } console.log(dramaMoviesRate)
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
    let movies2 = movies.slice();
    function orderByYear(movies){   
        return newList = movies.sort(function (a,b){
            if (a.year === b.year){
                return a.title.localeCompare(b.title);
            }
        return a.year - b.year;
        }) 
        return newList;
    } 
    orderByYear(movies2);
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let movies3 = movies.slice();
    //create a function
    function orderAlphabetically(films){
           return films.map(film => film.title).sort(function(a,b){
              return a.localeCompare(b);
            }).slice(0,20);
    }
    console.log(orderAlphabetically(movies3));
    
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
let movies4 = movies.slice();
function turnHoursToMinutes(films){
    var result = films.map(function(film){
        let durationInMinutes = Number(film.duration[0])*60 + Number(film.duration[3])*10 + Number(film.duration[4])
    return {
        title: film.title,
        year: film.year,
        director: film.director,
        duration: durationInMinutes,
        genre:film.genre,
        rate: film.rate
    }
})
}
console.log(turnHoursToMinutes(movies4));
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(films){
    
}