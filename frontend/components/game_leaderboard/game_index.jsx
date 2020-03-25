import React from 'react'
import GameIndexItem from './game_index_item';

class GameIndex extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        console.log(this.props.users)
        if (this.props.users.length === 0) return null  
        return (
            <div className="game-index-container">
                <ul className="game-index-ul">
                    {
                        this.props.users.map((user, idx) => (
                            <li key={idx}><GameIndexItem user={user} /></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default GameIndex;