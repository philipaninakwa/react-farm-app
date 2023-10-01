import React, { Component } from 'react';
import goat from "./images/goat.jpg";
import chickens02 from "./images/chickens02.jpg";
import eggs from "./images/eggs.jpg";
import cassava from "./images/cassava.jpg";
import cocoyam from "./images/cocoyam.jpg";
import plantain from "./images/plantain.jpg";
import milk from "./images/milk.jpg";


class SecondSection extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <section className="second-section">
        <div className="second-container">
            <div className="heading">
                <h1>What we have in stock?</h1>
            </div>
            <div className="second-body">
                <div className="card-boxes">
                    <div className="card">
                        <div className="image-container"><img src={goat} alt="goat"/></div>
                        <div className="captionate">
                            <h3>GOAT</h3>
                            <span>Well bred goat is available in different species and affordable</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-container"><img src={chickens02} alt="chickens"/></div>
                        <div className="captionate">
                            <h3>CHICKEN</h3>
                            <span>Cock-a-dool-dool! Guess who has chicken? Yes, Us ;D</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-container"><img src={eggs} alt="eggs"/></div>
                        <div className="captionate">
                            <h3>EGGS</h3>
                            <span>From our healthy chickens, we sell eggs as well</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-container"><img src={cassava} alt="cassava"/></div>
                        <div className="captionate">
                            <h3>CASSAVA</h3>
                            <span>Can't spell FUFU without cassava. We got some here, just sayin'</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-container"><img src={cocoyam} alt="cocoyam"/></div>
                        <div className="captionate">
                            <h3>COCOYAM</h3>
                            <span>Need some cocoYAMS? We got you</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-container"><img src={plantain} alt="plantain"/></div>
                        <div className="captionate">
                            <h3>PLANTAIN</h3>
                            <span>Some of the best plantain is sold here</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-container"><img src={milk} alt="milk"/></div>
                        <div className="captionate">
                            <h3>MILK</h3>
                            <span>Yes, we got milk too</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </>
        );
    }
}
 
export default SecondSection;