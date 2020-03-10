import React from 'react';

class TournamentIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.getTournamentInfo()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Test</h1>
            </div>
        )
    }
}

export default TournamentIndex;