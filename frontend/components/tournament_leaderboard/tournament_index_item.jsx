import React from 'react';

class TournamentIndexItem extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        console.log(this.props)
        return (
            <div className="tournament-index-item-container">
                <div className="tournament-index-item-default-show">
                    <h1>{this.props.props.pos}</h1>
                    <h1>{this.props.props.player}</h1>
                    <h1>{this.props.props.to_par}</h1>
                    <h1>{this.props.props.today}</h1>
                    <h1>{this.props.props.thru}</h1>
                </div>
            </div>
        )
    }
}

export default TournamentIndexItem;