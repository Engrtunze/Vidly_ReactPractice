import React from 'react';
import Input from "./common/input";
import Form from "./common/Form";

import  Joi from  "joi-browser"

class Login extends Form {

    state = {
        data : {username : "", password: ""},
        errors: {}
    };

    schema = {
        username : Joi.string().required().label('Username'),
        password : Joi.string().required().label('Password')
    }

    // validate = () => {

        //basic form validation method start here
        // console.log(result);
        //
        // const errors = {};
        //
        // const {data} = this.state;
        // if (data.username.trim() === "")
        //  errors.username = "Username is required.";
        //
        // if (data.password.trim() === "" )
        //     errors.password = "Password is required";
        //
        // return Object.keys(errors).length === 0 ?  null  :  errors;
        //ends here.

    // }

    //username = React.createRef();

    // componentDidMount() {
    //     this.username.current.focus();
    // }



    doSubmit = () =>{
        console.log("submitted");
    }

    // validateProperty = ({name, value}) => {
    //     // if  (name === "username")
    //     // {
    //     //     if (value.trim() === "")return  "Username is required."
    //     // }
    //     //
    //     // if  (name === "password")
    //     // {
    //     //     if (value.trim() === "")return  "Password is required."
    //     // }
    //
    // };

    handleChange = e => {
        const  errors = {...this.state.errors};
        const errorMessage =this.validateProperty(e.currentTarget);
        if (errorMessage) errors[e.currentTarget.name] = errorMessage;
        else
            delete  errors[e.currentTarget.name];



const data = {...this.state.data};
data[e.currentTarget.name] =e.currentTarget.value;
this.setState({data, errors});
    }


    render() {
        const {data, errors} = this.state;

        return (
            <div>
                <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>

                        <Input
                        name="username"
                        value={data.username}
                        label="username"
                        onChange={this.handleChange}
                       error={errors.username}
                        />

                        <Input
                            name="password"
                            value={data.password}
                            label="password"
                            onChange={this.handleChange}
                           error={errors.password}
                        />


                        {this.renderButton('Login')}

                    </form>
            </div>
        );
    }


}

export default Login;