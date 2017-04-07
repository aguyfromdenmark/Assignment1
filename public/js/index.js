var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, browserHistory, Link } from 'react-router';
import Fetch from 'react-fetch';


// app requires
// var signup = require('./signup');
// var login = require('./login');
// var weather = require('./weather');


//routing setup
var App = React.createClass({
    render: function () {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={index}></Route>
                <Route path={"/application/signup"} component={signup}></Route>
                <Route path={"/application/login"} component={login}></Route>
                <Route path={"/api/weather"} component={weather}></Route>
            </Router>
        );
    }
});


//Create index component
var index = React.createClass({
    render: function () {
        return (
            <div id="index-links">
                <a href="/application/logout">Log ud her</a><br />
                <a href="/application/login">Du kan logge ind her</a><br />
                <a href="/application/signup">Du skal oprette en bruger her</a><br />
                <a href="/api/weather">Dette er den låste side</a>
            </div>
        );
    }
});


//Create signup component
var signup = React.createClass({
    render: function () {
        return (
            <div id="index-links">
                <h2>Sign up</h2>
                <form method="POST" action="/application/signup">
                    <input type="text" name="username" placeholder="username" />
                    <input type="text" name="password" placeholder="password" />
                    <button type="submit">Sign up!!</button>
                </form>
                <a href="/application/">Forsiden</a><br />
                <a href="/application/login">Du kan logge ind her</a><br />
                <a href="/api/weather">Dette er den låste side</a>
            </div>
        );
    }
});


//Create login component
var login = React.createClass({
    render: function () {
        return (
            <div id="index-links">
                <h2>Log in</h2>
                <form method="POST" action="/application/login">
                    <input type="text" name="username" placeholder="username" />
                    <input type="text" name="password" placeholder="password" />
                    <button type="submit">Login!</button>
                </form>
                <a href="/application/">Forsiden</a><br />
                <a href="/application/signup">Du skal oprette en bruger her</a> <br />
                <a href="/api/weather">Dette er den låste side</a>
            </div >
        );
    }
});


//Create weater component
var weather = React.createClass({
    render: function () {
        return (

            <Fetch url="http://api.openweathermap.org/data/2.5/weather?q=Aalborg,dk&units=metric&APPID=795043e0553dcbf7a1583bcf6ce13f17">
                <TestComponent />
            </Fetch>



        );
    }
});

var TestComponent = React.createClass({
    render: function () {
        console.log(this.props)
        return (

            <div id="index-links">
                <p>Vejret i {this.props.name} ...kan ses i console log :-P</p>
                <p>cod = {this.props.cod}</p>
                <p>to do Temperatur osv osv. </p>
                <a href="/application/">Forsiden</a><br />
                <a href="/application/signup">Du skal oprette en bruger her</a> <br />
                <a href="/api/weather">Dette er den låste side</a>
            </div >


        );
    }
});

/*
            <div id="index-links">
                <h2>Weather</h2>
                <p>el weather</p>
                <a href="/application/">Forsiden</a><br />
                <a href="/application/logout">Log ud her</a><br />
            </div >*/


ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
