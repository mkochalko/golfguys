import React from 'react'


class GameIndexItem extends React.Component {

    render() {

        return (
            <div>
                <h4>{this.props.user.username}</h4>
            </div>
        )
    }
}

export default GameIndexItem;