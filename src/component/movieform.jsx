import React from 'react';
import Form from "./common/Form";
import Joi from "joi-browser";
import {getGenres} from "../services/fakeGenreService";
import {getMovie, saveMovie} from "../services/fakeMovieServices";

// const Movieform = ({match, history}) => {
//     return (
//         <div>
//             <h1>Movie form {match.params.id}</h1>
//             <button className="btn btn-primary" onClick={()=> history.push("/movies")}>save</button>
//         </div>
//     );
// };
class Movieform extends Form {
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
        title : Joi.string().required().label('Title'),
        genreId : Joi.string().required().label('Genre'),
        numberInStock  : Joi.number().required().min(0).max(100).label('Number in Stock'),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Daily Rental Rate")
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
            genreId:movie.genre._id,
            numberInStock:movie.numberInStock,
            dailyRentalRate:movie.dailyRentalRate
        };
    }

    doSubmit = () =>{
        saveMovie(this.state.data);
        this.props.history.push("/movies")
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

            <>
            <h1>Movie form </h1>
                <form onSubmit={this.handleSubmit}>

                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genreId", "Genre",  this.state.genres )}
                    {this.renderInput("numberInStock", "Number in Stock", "number")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    {this.renderButton('Save')}

                </form>
                </>
        );
    }


};

export default Movieform;