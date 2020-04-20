import React from 'react';
import TournamentContainer from './tournament_leaderboard/tournament_container';
import GameContainer from './game_leaderboard/game_container';

class SplashContainer extends React.Component {
    constructor(props) {
        super(props)


    }

    toggleScores() {

    }

    render() {

        return (
            <div className="body-container">
                <div>
                    <button>Masters</button>
                    <TournamentContainer />
                </div>
                <div>
                    <button>Golf Guys</button>
                    <GameContainer />
                </div>
            </div>
        )
    }
}

export default SplashContainer;