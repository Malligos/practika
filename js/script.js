'use strict';

const numberOfFilms = +prompt("Сколько фильмов Вы смотрели?" , ' ');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько вы бы оценили фильм?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log('Посмотренно довольно мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классный зритель!');
} else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
}else {
    console.log('error');
}

console.log(personalMovieDB);