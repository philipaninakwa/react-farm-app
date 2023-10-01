import React, { Component } from "react";
import peterrabit from "./images/peterrabit.jpg";
import chickens from "./images/chickens.jpg";
import fruits from "./images/fruits.jpg";
import piglet from "./images/piglet.jpg";

class FirstSection extends Component {
  state = {};

  constructor() {
    super();
    this.counter = 1;
    setInterval(() => {
      document.getElementById('radio' + this.counter).checked = true;
      this.counter++;
      if (this.counter > 4) {
        this.counter = 1;
        
      }
    }, 4800);
  }
  render() {
    return (
      <>
        <section id="first-section">
          <div className="first-container">
            <div className="first-first-item">
              <h1>Welcome to GreenFarm!</h1>
              <span>
                When you need fruits, vegetables or livestock, look no further.
                Visit GreenFarm for the best products. We are stocked with many
                varieties that will suit your every demand.
              </span>
              <button>Get Started</button>
            </div>
            <div className="first-second-item">
              <div className="slides">
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />
                <div className="slide first">
                  <img src={peterrabit} alt="" />
                </div>
                <div className="slide">
                  <img src={chickens} alt="" />
                </div>
                <div className="slide">
                  <img src={fruits} alt="" />
                </div>
                <div className="slide">
                  <img src={piglet} alt="" />
                </div>
                <div className="navigation-auto">
                  <div className="auto-btn1"></div>
                  <div className="auto-btn2"></div>
                  <div className="auto-btn3"></div>
                  <div className="auto-btn4"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default FirstSection;
