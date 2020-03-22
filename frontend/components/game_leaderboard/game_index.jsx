import React from 'react'
import GameIndexItem from './game_index_item';

class GameIndex extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        if (this.props.users.length === 0) return null  
        return (
            <div>
                <ul>
                    {
                        this.props.users.map((user, idx) => {
                            <li key={idx}><GameIndexItem user={user} /></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default GameIndex;