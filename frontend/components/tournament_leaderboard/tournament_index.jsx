import React from 'react';
import TournamentIndexItem from './tournament_index_item';

class TournamentIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.getTournamentInfo()
    }

    render() {
        if (!this.props) return null
        // console.log(this.props.leaderboard)
        return (
            <div className="tournament-index-container">
                <div className="tournament-index-ul-title">
                    <h1>Pos</h1>
                    <h1>Player</h1>
                    <h1>To Par</h1>
                    <h1>Today</h1>
                    <h1>Through</h1>
                </div>
                <ul className="tournament-index-ul">
                    {
                        this.props.leaderboard.length > 0 ? this.props.leaderboard.map((player, idx) => (
                            <li key={idx}><TournamentIndexItem props={player}/></li>
                        )) : ''
                    }
                </ul>
            </div>
        )
    }
}

export default TournamentIndex;