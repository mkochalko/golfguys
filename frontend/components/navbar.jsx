import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.showMobileNav = this.showMobileNav.bind(this);
    }

    showMobileNav() {
        const mobileNav = document.querySelector(".navbar-ul-container")
        mobileNav.classList.toggle('mobile-navbar-hidden')
        //test
    }

    render() {

        return(
            <div className="navbar">
                <h1>GolfGuys</h1>
                <ul className="navbar-ul-web">
                    <li><Link to="/about">About</Link></li>
                    <li><a href="https://www.linkedin.com/in/mkochalko/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/mkochalko" target="_blank">GitHub</a></li>
                    <li><Link to="/careers">Careers</Link></li>
                </ul>
                <button onClick={this.showMobileNav} className="navbar-button-mobile"><img src="https://github.com/mkochalko/golfguys/blob/master/app/assets/images/navbar_image.png?raw=true" /></button>
                <div className='navbar-ul-container mobile-navbar-hidden'>
                    <button onClick={this.showMobileNav} className="navbar-button-mobile"><img src="https://github.com/mkochalko/golfguys/blob/master/app/assets/images/navbar_image.png?raw=true" /></button>
                    <ul className="navbar-ul-mobile">
                        <li><Link to="/about">About</Link></li>
                        <li><a href="https://www.linkedin.com/in/mkochalko/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/mkochalko" target="_blank">GitHub</a></li>
                        <li><Link to="/careers">Careers</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;