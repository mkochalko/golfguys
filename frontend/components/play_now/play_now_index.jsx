import React from 'react'
import Navbar from '../navbar';

class PlayNowIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getPlayers().then(playersObj => {
            console.log(playersObj.players)
            let playersArr = [];
            for (let player of Object.values(playersObj.players)) {
                console.log(player)
            }
        })
    }

    render() {

        return (
            <div>
                <Navbar />
                <div>Play Now!</div>
            </div>
        )
    }
}

export default PlayNowIndex;