import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Home from "./routes/Home";
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

render((
  <React.StrictMode>
    <Router>
        <App />
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
      </Router>
  </React.StrictMode>)
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
