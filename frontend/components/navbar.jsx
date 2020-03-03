import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {

    render() {

        return(
            <div className="navbar">
                <h1>GolfGuys</h1>
                <ul className="navbar-ul">
                    <li><Link to="/about">About</Link></li>
                    <li><a href="https://www.linkedin.com/in/mkochalko/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/mkochalko" target="_blank">GitHub</a></li>
                    <li><Link to="/careers">Careers</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;