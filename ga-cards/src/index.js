import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import Contact from './AddCard';
import About from './About';
import NotFound from './NotFound';
import './index.css';

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="addCard" component={AddCard}/>
      <Route path="about" component={About}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>),
  document.getElementById('root')
);
