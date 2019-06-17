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
                    <div className="inHomeContainer">
                        <h1>One stop for all <span className="your">your</span> <span className="cravings">cravings</span></h1>
                        <div className="searchbar">
                            <form onSubmit={this.search}>
                                <input type="text" placeholder="Search your favorite food here.." />
                                <input type="submit" value="Find" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;