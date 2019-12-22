import * as React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from '../components/Home'
import Login from '../components/Login';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login}/>
        </Switch>
    </Router>
)

export default App;