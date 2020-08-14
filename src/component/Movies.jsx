import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieServices'

export default class Movies extends Component {
  
    state ={
        movies : getMovies()
    };
  
    handleDelete = (movie) => {

        const moviesdelete = this.state.movies.filter(m => m._id !==movie._id);
        this.setState({movies : moviesdelete})

        console.log(movie)


    }
    render() {
        const { length: count } = this.state.movies;

        if(count === 0)
        return <p>There are no movies in the database.</p>;

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
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.movies.map(movie =>(  
                  <tr key={movie._id}>
                  <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                  </tr>))}
                 
              </tbody>
          </table>
          </>
        );
    }
}
