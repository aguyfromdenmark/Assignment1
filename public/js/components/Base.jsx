import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Base = ({ children }) => (


    <div>
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>
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