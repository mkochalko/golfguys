import React from 'react'


class GameIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tier1: this.props.tier1,
            tier2: this.props.tier2,
            tier3: this.props.tier3,
            tier4: this.props.tier4,
            tier5: this.props.tier5,
            tier6: this.props.tier6,
        }

    }

    render() {
        if (Object.values(this.props.tournament).length === 0 ) return null;
        console.log(typeof this.props.tournament[this.props.tier6].to_par)
        return (
            <div className="user-li-item">
                <h4>{this.props.user.username}</h4>
                <div className="user-tier-container">
                    <div className="tier-player-container">
                        <h4>{this.state.tier1}</h4>
                        <div className="tier-player-details">
                            <div className="tier-player-score-header">
                                <h4>Today</h4>
                                <h4>To Par</h4>
                            </div>
                            <div className="tier-player-score">
                                <h4>{this.props.tournament[this.props.tier1].today}</h4>
                                <h4>{this.props.tournament[this.props.tier1].to_par}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="tier-player-container">
                        <h4>{this.state.tier2}</h4>
                        <div className="tier-player-details">
                            <div className="tier-player-score-header">
                                <h4>Today</h4>
                                <h4>To Par</h4>
                            </div>
                            <div className="tier-player-score">
                                <h4>{this.props.tournament[this.props.tier2].today}</h4>
                                <h4>{this.props.tournament[this.props.tier2].to_par}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="tier-player-container">
                        <h4>{this.state.tier3}</h4>
                        <div className="tier-player-details">
                            <div className="tier-player-score-header">
                                <h4>Today</h4>
                                <h4>To Par</h4>
                            </div>
                            <div className="tier-player-score">
                                <h4>{this.props.tournament[this.props.tier3].today}</h4>
                                <h4>{this.props.tournament[this.props.tier3].to_par}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="tier-player-container">
                        <h4>{this.state.tier4}</h4>
                        <div className="tier-player-details">
                            <div className="tier-player-score-header">
                                <h4>Today</h4>
                                <h4>To Par</h4>
                            </div>
                            <div className="tier-player-score">
                                <h4>{this.props.tournament[this.props.tier4].today}</h4>
                                <h4>{this.props.tournament[this.props.tier4].to_par}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="tier-player-container">
                        <h4>{this.state.tier5}</h4>
                        <div className="tier-player-details">
                            <div className="tier-player-score-header">
                                <h4>Today</h4>
                                <h4>To Par</h4>
                            </div>
                            <div className="tier-player-score">
                                <h4>{this.props.tournament[this.props.tier5].today}</h4>
                                <h4>{this.props.tournament[this.props.tier5].to_par}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="tier-player-container">
                        <h4>{this.state.tier6}</h4>
                        <div className="tier-player-details">
                            <div className="tier-player-score-header">
                                <h4>Today</h4>
                                <h4>To Par</h4>
                            </div>
                            <div className="tier-player-score">
                                <h4>{this.props.tournament[this.props.tier6].today}</h4>
                                <h4>{this.props.tournament[this.props.tier6].to_par}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="tier-player-container">
                        <h4>Total Score</h4>
                        <h4>{
                            parseInt(this.props.tournament[this.props.tier1].to_par) +
                            parseInt(this.props.tournament[this.props.tier2].to_par) +
                            parseInt(this.props.tournament[this.props.tier3].to_par) +
                            parseInt(this.props.tournament[this.props.tier4].to_par) +
                            parseInt(this.props.tournament[this.props.tier5].to_par) +
                            parseInt(this.props.tournament[this.props.tier6].to_par)
                        }</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameIndexItem;