import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';

const Base = ({ children }) => (


    <div>
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>
            {Auth.isUserAuthenticated() ? (
                <div>
                    <Link to="/logout">Log out</Link>
                </div>
            ) : (
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to "/googleLogin">Login with google</Link>
                        <Link to="/signup">Sign up</Link>
                    </div>
                )}
        </nav>

        <div>
            {children}
        </div>
    </div>

);



Base.PropTypes = {
    children: PropTypes.object.isRequired
};

export default Base;