import React, { Component } from 'react';
import { Link } from "react-router-dom";


class HeroSection extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <section id="hero-section">
        <div className="hero-container">
            <nav>
                <div className="nav-container">
                    <h1>GreenFarm</h1>
                </div>
            </nav>
            <div className="first-item">
                <h1>
                    GreenFarm provides the best of quality products
                </h1>
                <div className="buttons">
                    <button><Link to="/GetStarted">Get Started</Link></button>
                    <button>Explore</button>
                </div>
            </div>

        </div>
    </section>
            </>
        );
    }
}
 
export default HeroSection;