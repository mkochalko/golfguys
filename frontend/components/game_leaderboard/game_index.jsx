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
                <ul className='game-index-header'>
                    <li>Username</li>
                    <div className='game-index-tier-header'>
                        <li>Tier 1</li>
                        <li>Tier 2</li>
                        <li>Tier 3</li>
                        <li>Tier 4</li>
                        <li>Tier 5</li>
                        <li>Tier 6</li>
                        <li>Total Score</li>
                    </div>
                </ul>
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