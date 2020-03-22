import React from 'react';
import TournamentContainer from './tournament_leaderboard/tournament_container';
import GameContainer from './game_leaderboard/game_container';

class SplashContainer extends React.Component {

    render() {

        return (
            <div>
                <TournamentContainer />
                <GameContainer />
            </div>
        )
    }
}

export default SplashContainer;