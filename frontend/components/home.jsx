import React from 'react';
import Navbar from './navbar';
import SplashContainer from './splash_container';

class Home extends React.Component {

    render() {

        return(
            <div>
                <Navbar />
                <SplashContainer />
            </div>
        )
    }
}

export default Home;