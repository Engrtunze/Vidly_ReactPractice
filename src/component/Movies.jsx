import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieServices';
import Like from './common/like';
import Pagination  from './common/Paginate';
import {pagination} from "../utils/pagination";

export default class Movies extends Component {
  
    state ={
        movies : getMovies(),
        pageSize: 5,
        currentPage:1,
    };
  
    handleDelete = (movie) => {

        const moviesdelete = this.state.movies.filter(m => m._id !==movie._id);
        this.setState({movies : moviesdelete})

        console.log(movie)


    }

    handleLike = movie =>
    {
       // console.log('like clicked', movie); 
    //    const Newmovies = [...this.state.movies]; //clone movie state
    //    const Movie_index = Newmovies.indexOf(movie);
    //    Newmovies[Movie_index] = {...Newmovies[Movie_index]};
    //    Newmovies[Movie_index].liked = !Newmovies[Movie_index].liked;
    //    this.setState({Newmovies})
    const movies = [...this.state.movies]; //clone movie state
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
    };

    handlePageChange = (page) =>
    {
        //console.log(page);
        this.setState({currentPage:page});
    }



    render() {
        const { length: count } = this.state.movies;
        const {pageSize, currentPage, movies} =this.state;

        if(count === 0)
        return <p>There are no movies in the database.</p>;

        const moviesPag = pagination(movies, currentPage, pageSize)

        return (
            <>
            <p>Showing <b>{count}</b> movies in the database.</p> 
         <table className="table">
              <thead>
                  <tr>
                      <th>Title</th>
                      <th>Genre</th>
                      <th>Stock</th>
                      <th>Rate</th>
                      <th/>
                      <th/>
                  </tr>
              </thead>
              <tbody>
                  {/*{this.state.movies.map(movie =>(  */}
                  {moviesPag.map(movie =>(
                      <tr key={movie._id}>
                  <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                      <Like liked={movie.liked} onClick={ () => this.handleLike(movie)}/>
                  </td>
                  <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                  </tr>))}
                 
              </tbody>


          </table>
                <Pagination
                    itemsCount="abc"
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />


          </>
        );
    }
}
