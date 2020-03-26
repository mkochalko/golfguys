import React from 'react'
import GameIndexItem from './game_index_item';

class GameIndex extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        console.log(this.props.users)
        // console.log(this.props.tournament)
        if (this.props.users.length === 0) return null  
        return (
            <div className="game-index-container">
                <ul className="game-index-ul">
                    {
                        this.props.users.map((user, idx) => {
                            // let player = 
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