import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './home';

const App = () => (
    <div>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </div>
)

export default App;