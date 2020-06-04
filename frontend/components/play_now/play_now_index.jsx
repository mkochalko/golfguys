import React from 'react'
import Navbar from '../navbar';

class PlayNowIndex extends React.Component {
    constructor(props) {
        super(props)

        this.sortedPlayers = []
    }

    componentDidMount() {
        this.props.getPlayers().then(playersObj => {
            console.log(playersObj.players)
            let playersArr = [];
            for (let player of Object.values(playersObj.players)) {
                playersArr.push([player.name, player.odds])
            }
            playersArr.sort((a, b) => b[1] - a[1])
            console.log(playersArr)
            this.setState(() => { this.sortedPlayers = playersArr }, console.log(this.sortedPlayers))
        })
    }

    

    render() {
        console.log(this.sortedPlayers)
        return (
            <div>
                <Navbar />
                <div>Play Now!</div>
                <div>
                    {
                        this.sortedPlayers.length ? (
                        this.sortedPlayers.map((player, key) => {
                            return <li>{player[0]}</li>
                        })) : null
                    }
                </div>
            </div>
        )
    }
}

export default PlayNowIndex;