import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';
import Auth from '../modules/Auth';

const Dashboard = ({secretData}) => (
    <div>
        <h1>This is the beautiful dashboard!</h1>
        <p>If you can see this, you should be logged in! woah! </p>
        <p>{secretData}</p>
    </div>
);

Dashboard.PropTypes = {
    secretData: PropTypes.string.isRequired
};

export default Dashboard;