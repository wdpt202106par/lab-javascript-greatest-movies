
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {

    let allDirectors = moviesArray.map(movie => {
        return movie.director;
    });
    return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

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

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
