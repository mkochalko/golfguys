import React from 'react'
import Navbar from '../navbar';
import EntryTier from './entry_tier';
class PlayNowIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sortedPlayers: [],
            username: '',
            'tier1': 'Not Selected',
            'tier2': 'Not Selected',
            'tier3': 'Not Selected',
            'tier4': 'Not Selected',
            'tier5': 'Not Selected',
            'tier6': 'Not Selected',
        }
        // this.tiers = {
        //     '1': this.state.tier1,
        //     '2': this.state.tier2,
        //     '3': this.state.tier3,
        //     '4': this.state.tier4,
        //     '5': this.state.tier5,
        //     '6': this.state.tier6
        // }

        this.setTiers = this.setTiers.bind(this);
        this.updateTiers = this.updateTiers.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
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
    
    updateTiers(e) {
        let tier = `tier${e.currentTarget.id}`
        let golfer = e.currentTarget.innerHTML
        this.setState({[tier]: golfer})
    }

    updateUsername(form) {
        return (e) => {
            this.setState({[form]: e.currentTarget.value})
        }
    }

    enterLineup() {
        
    }

    render() {
        return (
            <div>
                <Navbar />
                <div>Play Now!</div>
                <div>
                    <h3>Please Enter your Username</h3>
                    <input 
                        type="text" 
                        onChange={this.updateUsername('username')}
                    />
                </div>
                <div className="tiers-selections-container">
                    <div className="entry-tier-select-container">
                        {
                            this.state.sortedPlayers.length ? (
                            this.setTiers(this.state.sortedPlayers).map((tier, key) => {
                                return <EntryTier click={this.updateTiers} key={key} idx={key + 1} tier={tier}/>
                            })) : null
                        }
                    </div>
                    <div>
                        <ul>
                            <li>{this.state.tier1}</li>
                            <li>{this.state.tier2}</li>
                            <li>{this.state.tier3}</li>
                            <li>{this.state.tier4}</li>
                            <li>{this.state.tier5}</li>
                            <li>{this.state.tier6}</li>
                        </ul>
                    </div>
                </div>
                <button type="submit">Create Lineup</button>
            </div>
        )
    }
}

export default PlayNowIndex;