import React from 'react';

class EntryTier extends React.Component {
    constructor(props) {
        super(props)

        this.highlightPlayer = this.highlightPlayer.bind(this);
    }

    highlightPlayer(e) {
        let li = e.currentTarget.getElementsByTagName('li')
        console.log(li)
        console.log(this.drag)
        for (let i = 0; i < li.length; i++) {
            let liElement = li[i];
            liElement.classList.remove('selected')
        }
        
        e.target.classList.add('selected')
    }

    render() {
        return (
            <div className="entry-player-tier">
                <ul onMouseUp={this.highlightPlayer}>
                    {
                        this.props.tier.map((player, idx) => {
                            return (
                            <li 
                                onClick={this.props.click} 
                                id={this.props.idx} 
                                key={idx}
                                className=""
                                >{player[0]}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default EntryTier;