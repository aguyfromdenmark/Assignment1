var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, browserHistory, Link } from 'react-router';
import Fetch from 'react-fetch';

//style load test
require('../css/index.css');

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
                <ul>
                    <li><a href="/">Forside</a></li>
                    <li><a href="/application/login">Log ind</a></li>
                    <li><a href="/application/signup">Opret bruger</a></li>
                    <li><a href="/api/weather">Hemmeligt vejr - kræver login</a></li>
                    <li><a href="/application/logout">Log ud</a></li>
                </ul>
                <h2>Forside</h2>
                <p>Du var adgang til det hemmelige vejr ved at: </p>
                <p>Oprette en bruger eller logge ind med en eksisterende bruger</p>
            </div>
        );
    }
});


//Create signup component
var signup = React.createClass({
    render: function () {
        return (
            <div id="index-links">
                <ul>
                    <li><a href="/">Forside</a></li>
                    <li><a href="/application/login">Log ind</a></li>
                    <li><a href="/application/signup">Opret bruger</a></li>
                    <li><a href="/api/weather">Hemmeligt vejr - kræver login</a></li>
                    <li><a href="/application/logout">Log ud</a></li>
                    <li><a href="/application/login/googleAuth">Sign In with Google</a></li>
                </ul>
                <h2>Opret Bruger</h2>
                <form method="POST" action="/application/signup">
                    <input type="text" name="username" placeholder="username" />
                    <input type="text" name="password" placeholder="password" />
                    <button type="submit">Sign up!!</button>
                </form>

            </div>
        );
    }
});


//Create login component
var login = React.createClass({
    render: function () {
        return (
            <div id="index-links">             
                <ul>
                    <li><a href="/">Forside</a></li>
                    <li><a href="/application/login">Log ind</a></li>
                    <li><a href="/application/signup">Opret bruger</a></li>
                    <li><a href="/api/weather">Hemmeligt vejr - kræver login</a></li>
                    <li><a href="/application/logout">Log ud</a></li>
                    <li><a href="/application/login/googleAuth">Sign In with Google</a></li>
                </ul>
                <h2>Log ind</h2>
                <form method="POST" action="/application/login">
                    <input type="text" name="username" placeholder="username" />
                    <input type="text" name="password" placeholder="password" />
                    <button type="submit">Login!</button>
                </form>

            </div >
        );
    }
});



/*
Still working on handling routes to the api with passport in the code below. 
I can find a user in db with this code but can't seem to get i back to the browser. 
This should work as the above code but doesn't. 
*/

/*
var login = React.createClass({
    render: function () {
        return (
            <div id="index-links">
                <h2>Log in</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="username" ref="username" required />
                    <input type="text" name="password" placeholder="password" ref="password" required />
                    <button type="submit">Login!</button>
                </form>
                <a href="/application/">Forsiden</a><br />
                <a href="/application/signup">Du skal oprette en bruger her</a> <br />
                <a href="/api/weather">Dette er den låste side</a>
            </div >
        );
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        fetch("/application/login", {
            method:"POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
    }
});
*/


//Create weather component
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
        var orig = JSON.stringify(this.props);

        console.log(this.props);
        return (
            <div id="index-links">
                <ul>
                    <li><a href="/">Forside</a></li>
                    <li><a href="/application/login">Log ind</a></li>
                    <li><a href="/application/signup">Opret bruger</a></li>
                    <li><a href="/api/weather">Hemmeligt vejr - kræver login</a></li>
                    <li><a href="/application/logout">Log ud</a></li>
                    <li><a href="/application/login/googleAuth">Sign In with Google</a></li>
                </ul>
                <h2>Hemmeligt vejr</h2>
                
                <p>Vejret i {this.props.name}: </p>
                <p>Her findes den returnerede json fra openweathermap api'en: </p>
                <p><strong>{orig}</strong></p>
                <p>Vejret i {this.props.name} kan også ses i console log</p>
            </div >
        );
    }
});


ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
