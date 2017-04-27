import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';
import SignIn from './../components/SignIn.jsx';

const HomePage = () => (
    <div>
        <h1>MERN Proof of Concept V2!</h1>
        <p>Register or log in to get a secret message from the api</p>
        <SignIn></SignIn>
    </div>
);

export default HomePage;