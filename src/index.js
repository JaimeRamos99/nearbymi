import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstView from './App';
import Home from './components/home'
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/register'
const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={FirstView} />
            <Route path="/register/" exact component={Register} />
            <Route path="/home/" exact component={Home} />
        </Switch>
    </Router>
);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
