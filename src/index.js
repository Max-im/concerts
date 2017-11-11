import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App/App';
import Single from './components/Single/Single';
import NotFound from './components/NotFoutd/NotFound';



ReactDOM.render(

  <Router history={hashHistory}>
    <Route  path="/" component={App}></Route>
    <Route path='/id/:id' component={Single} />
    <Route path="*" component={NotFound} />
  </Router>, 

  document.getElementById('root'));
registerServiceWorker();
