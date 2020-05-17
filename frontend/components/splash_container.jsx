import React from 'react';
import { Link } from 'react-router-dom'
import TournamentContainer from './tournament_leaderboard/tournament_container';
import GameContainer from './game_leaderboard/game_container';

class SplashContainer extends React.Component {
    constructor(props) {
        super(props)

        this.toggleScores = this.toggleScores.bind(this)
    }

    componentDidMount() {
        let golfGuysButton = document.querySelector(".golf-guys-button")
        golfGuysButton.disabled = true;
    }

    toggleScores(e) {
        console.log(e.currentTarget.innerHTML)
        let tab = e.currentTarget.innerHTML;
        let golfGuys = document.getElementById("golf-guys")
        let masters = document.getElementById("masters")
        let golfGuysButton = document.querySelector(".golf-guys-button")
        let mastersButton = document.querySelector(".masters-button")
        if (tab === 'Golf Guys') {
            golfGuysButton.disabled = true;
            mastersButton.disabled = false;
        } else {
            golfGuysButton.disabled = false;
            mastersButton.disabled = true;
        }
        golfGuys.classList.toggle('disable')
        masters.classList.toggle('disable')
    }

    render() {

        return (
            <div className="body-container">
                <Link to="/play" className="play-now-button">Play Now!</Link>
                <div className='leaderboard-buttons'>
                    <button className="masters-button" onClick={this.toggleScores}>Masters</button>
                    <button className="golf-guys-button" onClick={this.toggleScores}>Golf Guys</button>
                </div>
                <div className='leaderboards'>
                    <div id="masters" className="disable">
                        <TournamentContainer />
                    </div>
                    <div id="golf-guys">
                        <GameContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashContainer;