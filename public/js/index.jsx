import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Base from './components/Base.jsx';
import routes from './routes.js';

//style load test
 require('../css/index.css');


ReactDom.render(

<Base>
    <Router history={browserHistory} routes={routes}  />
</Base>, document.getElementById('app-wrapper'));
