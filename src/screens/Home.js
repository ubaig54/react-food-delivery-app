import React, { Component } from "react";

class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="Home">
                <div className="container">
                    <h1>One stop for all <br /> <span className="your">your</span> <span className="cravings">cravings</span></h1>
                </div>
            </div>
        )
    }
}

export default Home;