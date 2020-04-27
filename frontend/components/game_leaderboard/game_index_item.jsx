import React from 'react'
import GameGolferItem from './game_golfer_item';


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
        this.convertTotalScore = this.convertTotalScore.bind(this)
        this.mobilePlayerToggle = this.mobilePlayerToggle.bind(this)
    }

    convertTotalScore(player) {
        if (player.to_par === 'CUT') {
            return parseInt(player.r1) + parseInt(player.r2) + 160 - 288;
        } else {
            return parseInt(player.to_par);
        }
    }

    mobilePlayerToggle(e) {
        console.log(e.currentTarget)
        let player = e.currentTarget;
        let golfers = player.querySelector('.user-tier-container');
        player.classList.toggle('user-height')
        golfers.classList.toggle('hide-players')
        
    }

    render() {
        if (Object.values(this.props.tournament).length === 0 ) return null;
        console.log(this.props.user)
        return (
            <div onClick={this.mobilePlayerToggle} className="user-li-item">
                <h4 className="game-place">{this.props.place}</h4>
                <h4 className="game-index-username">{this.props.user.username}</h4>
                <div className="user-tier-container hide-players">
                    <div className="mobile-player-score-title">
                        <h4>Today</h4>
                        <h4>Total</h4>
                    </div>
                    <GameGolferItem 
                        golfer={this.state.tier1}
                        today={this.props.tournament[this.props.tier1].to_par === "CUT" ? 8 : this.props.tournament[this.props.tier1].today}
                        toPar={this.props.tournament[this.props.tier1].to_par}
                    />
                    <GameGolferItem 
                        golfer={this.state.tier2}
                        today={this.props.tournament[this.props.tier2].to_par === "CUT" ? 8 : this.props.tournament[this.props.tier2].today}
                        toPar={this.props.tournament[this.props.tier2].to_par}
                    />
                    <GameGolferItem 
                        golfer={this.state.tier3}
                        today={this.props.tournament[this.props.tier3].to_par === "CUT" ? 8 : this.props.tournament[this.props.tier3].today}
                        toPar={this.props.tournament[this.props.tier3].to_par}
                    />
                    <GameGolferItem 
                        golfer={this.state.tier4}
                        today={this.props.tournament[this.props.tier4].to_par === "CUT" ? 8 : this.props.tournament[this.props.tier4].today}
                        toPar={this.props.tournament[this.props.tier4].to_par}
                    />
                    <GameGolferItem 
                        golfer={this.state.tier5}
                        today={this.props.tournament[this.props.tier5].to_par === "CUT" ? 8 : this.props.tournament[this.props.tier5].today}
                        toPar={this.props.tournament[this.props.tier5].to_par}
                    />
                    <GameGolferItem 
                        golfer={this.state.tier6}
                        today={this.props.tournament[this.props.tier6].to_par === "CUT" ? 8 : this.props.tournament[this.props.tier6].today}
                        toPar={this.props.tournament[this.props.tier6].to_par}
                    />
                </div>
                <div className="tier-player-score-container">
                    {/* <h4 className="total-score-header">Total Score</h4> */}
                    <h5 className="user-total-score">{this.props.score}</h5>
                </div>
            </div>
        )
    }
}

export default GameIndexItem;