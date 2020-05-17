import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './home';
import PlayNowContainer from './play_now/play_now_container';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/play" component={PlayNowContainer} />
        </Switch>
    </div>
)

export default App;