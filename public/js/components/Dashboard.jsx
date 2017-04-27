import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';


//Quick Example for looping through an array, the array is returned from the api
function listItems(list) {

//using .map requires an array, and it does not recognize the array already present in list parameter 
    var listItem = [];

    for (var i = 0; i < list.length; i++) {
        listItem.push(list[i]);
    }

    return (
        listItem.map(function (object, index) {
            return (
                <div key={index}>
                    <h3>Agent id: {object.id}</h3>
                    <p>Name: {object.name}</p>
                    <p>Rank: {object.rank}</p>
                </div>
            )
        })
    )
}


const Dashboard = ({ secretData }) => (

    <div>
        <h1>Secret message</h1>
        <p>You are logged in and authorized to see the secret message: </p>
        <h3>List of secret agents: </h3>
        {listItems(secretData)}
    </div>
);

Dashboard.PropTypes = {
    secretData: PropTypes.string.isRequired
};

export default Dashboard;