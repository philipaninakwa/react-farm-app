import React, { Component } from 'react';
import instagram from './images/icon-instagram.svg';
import youtube from './images/icon-youtube.svg';
import pinterest from './images/icon-pinterest.svg';
import twitter from './images/icon-twitter.svg';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <footer className="footing">
        <div className="last-container">
            <div className="first-last-items">
                <div className="logo-items">
                    <h1>GreenFarm</h1>
                    <div className="icons">
                        <a href="#"><img src={instagram} alt="instagram"/></a>
                        <a href="#"><img src={youtube} alt="youtube"/></a>
                        <a href="#"><img src={pinterest} alt="pinterest"/></a>
                        <a href="#"><img src={twitter} alt="twitter"/></a>
                    </div>
                </div>
                <div className="links-container">
                    <a href="#">Get Started</a>
                    <a href="#">Explore</a>
                    <a href="#">About Us</a>
                </div>
            </div>
            <div className="last-last-item">
                Copyright &copy; 2023, All Rights Reserved
            </div>
        </div>
    </footer>
            </>
        );
    }
}
 
export default Footer;