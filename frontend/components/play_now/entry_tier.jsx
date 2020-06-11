import React from 'react';

class EntryTier extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <div className="entry-player-tier">
                <ul>
                    {
                        this.props.tier.map((player, idx) => {
                            return <li key={idx}>{player[0]}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default EntryTier;