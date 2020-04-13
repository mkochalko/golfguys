import React from 'react';


class GameGolferItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="tier-player-container">
                <h4>{this.props.golfer}</h4>
                <div className="tier-player-details">
                    <div className="tier-player-score-header">
                        <h4>Today</h4>
                        <h4>To Par</h4>
                    </div>
                    <div className="tier-player-score">
                        <h4>{this.props.today}</h4>
                        <h4>{this.props.toPar}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameGolferItem;