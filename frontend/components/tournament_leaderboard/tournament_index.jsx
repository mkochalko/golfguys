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
        console.log(this.props.leaderboard)
        return (
            <div>
                <ul>
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