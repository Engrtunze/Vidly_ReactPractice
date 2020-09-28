import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieServices';
import MoviesTable from "./moviesTable";
import Pagination  from './common/Paginate';
import {pagination} from "../utils/pagination";
import ListGroup from "./common/ListGroup";
import {getGenres} from "../services/fakeGenreService";
import _ from 'lodash'
import Navbar from "./common/Navbar";
import Link from "react-router-dom/Link";

export default class Movies extends Component {
  
    state ={
        movies :[],
        pageSize: 5,
        currentPage:1,
        genres:[],
        sortColumn: {path: 'title', order: 'asc'}
    };

    componentDidMount() {

        const Allgenres = [ { _id: "" ,name : 'All Genres'}, ...getGenres()]
        this.setState({movies:getMovies(), genres : Allgenres });
    }

    handleDelete = (movie) => {

        const moviesdelete = this.state.movies.filter(m => m._id !==movie._id);
        this.setState({movies : moviesdelete})

        console.log(movie)


    }

    handleLike = movie =>
    {
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

    handleGenreSelect = genre =>{
        this.setState({selectedGenre:genre, currentPage : 1});
    }

    handleSort = sortColumn =>
    {
        this.setState({sortColumn});
    };

    getPageData = () =>{
        const {pageSize, currentPage,  selectedGenre, movies : allMovies, sortColumn} =this.state;
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

        const sorted =  _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const moviesPag = pagination(sorted, currentPage, pageSize);

        return {totalCount: filtered.length, data: moviesPag}
    };


    render() {
        const { length: count } = this.state.movies;
        const {pageSize, currentPage,  sortColumn} =this.state;

        if(count === 0)
        return <p>There are no movies in the database.</p>;

       const {totalCount, data} = this.getPageData();

        return (


                <div className="row">


                    <div className="col-sm-2">

                       <ListGroup Listitems={this.state.genres}
                                  selectedItem={this.state.selectedGenre}
                                  onItemSelect={this.handleGenreSelect}
                       />

                    </div>
                    <div className="col-sm-10">
                        <Link to="/movies/Newmovies" className="btn btn-primary" style={{marginBottom:20}}>New movie</Link>

            <p>Showing <b>{totalCount}</b> movies in the database.</p>

                        <MoviesTable
                            moviesPag={data}
                            sortColumn={sortColumn}
                            onLike={this.handleLike}
                            onDelete={this.handleDelete}
                            onSort={this.handleSort}
                        />

                <Pagination
                    itemsCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
                    </div>
                </div>


        );
    }
}
