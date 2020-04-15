import React from 'react'
import GameIndexItem from './game_index_item';

class GameIndex extends React.Component {
    constructor(props) {
        super(props)

        this.calculateTotalScore = this.calculateTotalScore.bind(this)
    }

    componentDidMount() {
        this.props.getUsers()
    }

    calculateTotalScore(user) {
        let sum = 0;
        let players = [];
        players.push(this.props.tournament[user.tier1]);
        players.push(this.props.tournament[user.tier2]);
        players.push(this.props.tournament[user.tier3]);
        players.push(this.props.tournament[user.tier4]);
        players.push(this.props.tournament[user.tier5]);
        players.push(this.props.tournament[user.tier6]);
        for (let i = 0; i < players.length; i++) {
            let player = players[i]
            // console.log(this.props.tournament)
            // console.log(player)
            if (player.to_par === 'CUT') {
                sum += parseInt(player.r1) + parseInt(player.r2) + 160 - 288;
            } else {
                sum += parseInt(player.to_par);
            }
        }
        return sum;
    }

    render() {
        console.log(this.props.users)
        // console.log(this.props.tournament)
        if (this.props.users.length === 0) return null  
        if (Object.values(this.props.tournament).length === 0) return null  
        return (
            <div className="game-index-container">
                <div className='game-index-header'>
                    <h4 id='place-placeholder'></h4>
                    <h4>Username</h4>
                    <div className='game-index-tier-header'>
                        <div className="tier-player-header">
                            <h4>Tier 1</h4>
                        </div>
                        <div className="tier-player-header">
                            <h4>Tier 2</h4>
                        </div>
                        <div className="tier-player-header">
                            <h4>Tier 3</h4>
                        </div>
                        <div className="tier-player-header">
                            <h4>Tier 4</h4>
                        </div>
                        <div className="tier-player-header">
                            <h4>Tier 5</h4>
                        </div>
                        <div className="tier-player-header">
                            <h4>Tier 6</h4>
                        </div>
                        <div className="score-header">
                            <h4>Score</h4>
                        </div>
                    </div>
                </div>
                <ul className="game-index-ul">
                    {
                        this.props.users.map((user) => {
                            user.score = this.calculateTotalScore(user)
                            console.log(user)
                            return user
                            }).sort((a, b) => {
                                return a.score - b.score
                            }).map((user, idx) => {
                                return <li key={idx}>
                                        <GameIndexItem 
                                            place={idx + 1}
                                            user={user}
                                            tournament={this.props.tournament}
                                            tier1={user.tier1}
                                            tier2={user.tier2}
                                            tier3={user.tier3}
                                            tier4={user.tier4}
                                            tier5={user.tier5}
                                            tier6={user.tier6}
                                            score={user.score}
                                        />
                                    </li>
                            })
                    }
                </ul>
            </div>
        )
    }
}

export default GameIndex;