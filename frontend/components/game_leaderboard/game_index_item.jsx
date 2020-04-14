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
    }

    convertTotalScore(player) {
        if (player.to_par === 'CUT') {
            return parseInt(player.r1) + parseInt(player.r2) + 160 - 288;
        } else {
            return parseInt(player.to_par);
        }
    }

    render() {
        if (Object.values(this.props.tournament).length === 0 ) return null;
        // console.log(this.props.tournament[this.props.tier1].today)
        return (
            <div className="user-li-item">
                <h4 className="game-index-username">{this.props.user.username}</h4>
                <div className="user-tier-container">
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
                    <div className="tier-player-container">
                        <h4 className="total-score-header">Total Score</h4>
                        <h5 className="user-total-score">{
                            this.convertTotalScore(this.props.tournament[this.props.tier1]) +
                            this.convertTotalScore(this.props.tournament[this.props.tier2]) +
                            this.convertTotalScore(this.props.tournament[this.props.tier3]) +
                            this.convertTotalScore(this.props.tournament[this.props.tier4]) +
                            this.convertTotalScore(this.props.tournament[this.props.tier5]) +
                            this.convertTotalScore(this.props.tournament[this.props.tier6])
                        }</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameIndexItem;