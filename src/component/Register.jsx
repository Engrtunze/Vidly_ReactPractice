import React from 'react';
import Joi from "joi-browser";
import Form from "./common/Form";

class Register extends Form {

    state = {
        data : {emailaddress : "", password: "", name:""},
        errors: {}
    };

    schema = {
        emailaddress : Joi.string().required().email().label('Email'),
        password : Joi.string().required().min(5).label('Password'),
        name  : Joi.string().required().label('Name')
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

    doSubmit = () =>{
        console.log("submitted");
    };

    render() {
        return (
            <div>

                <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit}>

                    {this.renderInput("emailaddress", "email address", "email")}
                    {this.renderInput("password", "Password", "password" )}
                    {this.renderInput("name", "Name")}

                    {this.renderButton('Sign up')}

                </form>


            </div>
        );
    }
}

export default Register;