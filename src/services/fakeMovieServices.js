import * as genresAPI from "./fakeGenreService";

const movies = [
    {
    _id: "1",
    title:"Terminator",
    genre: {
        _id:"Gn1",
        name:"Action",
    },
        numberInStock:6,
        dailyRentalRate:2.5,
        publishDate: "2018-01-15"
},

{
    _id: "2",
    title:"Flexer",
    genre: {
        _id:"Gn2",
        name:"Sport",
    },
        numberInStock:3,
        dailyRentalRate:2.5,
},

{
    _id: "3",
    title:"Die Hard",
    genre: {
        _id:"Gn1",
        name:"Action",
    },
        numberInStock:5,
        dailyRentalRate:2.5,
},

{
    _id: "4",
    title:"Get out",
    genre: {
        _id:"Gn3",
        name:"Thriller",
    },
        numberInStock:10,
        dailyRentalRate:1.5,
},

{
    _id: "5",
    title:"Trip to Nigeria",
    genre: {
        _id:"Gn3",
        name:"Thriller",
    },
        numberInStock:12,
        dailyRentalRate:3.5,
}

];

export function getMovies()
{
    return movies
}

export function getMovie(id) {
    return movies.find(m => m._id === id);
}

// export function saveMovie(movie)
// {
//     let movieInDb = movies.find(m => m.id === movie.id) || {};
//     movieInDb.name = movie.name;
//     movieInDb.genre = genresAPI.genre.find(g => g.id === movie.genreId);
//     movieInDb.numberInStock= movie.numberInStock;
// }