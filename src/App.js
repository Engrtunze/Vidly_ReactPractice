import React, { Component } from 'react';
import Movies from "./component/Movies"
import Customer from "./component/customer";
import './App.css';
import {Route,Redirect, Switch} from "react-router-dom"
import Navbar from "./component/common/Navbar";
import Rentals from "./component/rentals";
import Notfound from "./component/notfound";
import Movieform from "./component/movieform";
import Login from "./component/login";
import "./App.css"
import Register from "./component/Register";



class App extends Component {

  render() {
  return (

<>
      <Navbar />
    <main className="container">
        <Switch>
            {/*<Route path="/movies/Newmovies" component={Movies}></Route>*/}
            <Route path="/Register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/movies/:id" component={Movieform}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/customers" component={Customer}></Route>
        <Route path="/rentals" component={Rentals}></Route>
        <Route path="/404Page" component={Notfound}></Route>
        <Redirect from="/"  exact to="/movies"/>
        <Redirect to="/404Page"/> 
        </Switch>
    </main>
</>
   
  );
  }
}

export default App;
