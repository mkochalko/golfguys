import React from 'react'
import Navbar from '../navbar';

class PlayNowIndex extends React.Component {
    constructor(props) {
        super(props)
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