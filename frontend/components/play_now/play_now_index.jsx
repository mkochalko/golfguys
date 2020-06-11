import React from 'react'
import Navbar from '../navbar';
import EntryTier from './entry_tier';
class PlayNowIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sortedPlayers: []
        }

        this.setTiers = this.setTiers.bind(this);
    }

    componentDidMount() {
        this.props.getPlayers().then(playersObj => {
            let playersArr = [];
            for (let player of Object.values(playersObj.players)) {
                playersArr.push([player.name, player.odds])
            }
            playersArr.sort((a, b) => b[1] - a[1])
            this.setState({sortedPlayers: playersArr}, () => {
                this.setTiers(this.state.sortedPlayers)
            })
        })
    }

    setTiers(players) {
        let playersPerTier = Math.floor(players.length / 6);
        let tiers = [[],[],[],[],[],[]]
        for (let i = 0; i < players.length; i++) {
            let tierIndex = Math.floor(i / playersPerTier);
            tiers[tierIndex].push(players[i]);
        }
        return tiers;
    }
    

    render() {
        return (
            <div>
                <Navbar />
                <div>Play Now!</div>
                <div>
                    {
                        this.state.sortedPlayers.length ? (
                        this.setTiers(this.state.sortedPlayers).map((tier, key) => {
                            return <EntryTier key={key} idx={key + 1} tier={tier}/>
                        })) : null
                    }
                </div>
            </div>
        )
    }
}

export default PlayNowIndex;