import React from 'react';
import Form from "./common/Form";
import Joi from "joi-browser";
import {getGenres} from "../services/fakeGenreService";
import {getMovie} from "../services/fakeMovieServices";

class NewMovies extends Form {
    state ={
        data : {
            title: "",
            genreId:"",
            numberInStock:"",
            dailyRentalRate:""
        },
        genres:[],
        errors:{}
    };

    schema = {
        _id:Joi.string(),
        title : Joi.string().required().email().label('Title'),
        genreId : Joi.string().required().min(5).label('Genre'),
        numberInStock  : Joi.number().required().min(0).max(100).label('Number in Stock'),
        dailyRentalRate: Joi.number().required().min(0).max(100).label("Daily Rental Rate")
    };

    componentDidMount() {
        const  genres = getGenres();
        this.setState({genres});

        const movieId = this.props.match.params.id;
        if (movieId === "new") return;

        const  movie = getMovie(movieId);
        if (!movie) return this.props.history.replace("/404Page");

        this.setState({data:this.mapToViewModel(movie)});



    }

    mapToViewModel(movie) {
        return {
            _id:movie._id,
            title:movie.title,
            genreId:movie.genre.id,
            numberInStock:movie.numberInStock,
            dailyRentalRate:movie.dailyRentalRate
        };
    }

    doSubmit = () =>{
        console.log("submitted");
    };




    handleChange = e => {
        const  errors = {...this.state.errors};
        const errorMessage =this.validateProperty(e.currentTarget);
        if (errorMessage) errors[e.currentTarget.name] = errorMessage;
        else
            delete  errors[e.currentTarget.name];



        const data = {...this.state.data};
        data[e.currentTarget.name] =e.currentTarget.value;
        this.setState({data, errors});
    };
    render() {
        return (
            <div>

                <h1>Add New movie</h1>
                <form onSubmit={this.handleSubmit}>

                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password" )}

                    {this.renderButton('Save')}

                </form>


                
            </div>
        );
    }


}

export default NewMovies;