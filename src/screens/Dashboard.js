import React, { Component } from "react";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {

        }

        this.search = this.search.bind(this);
    }

    search() {

    }

    render() {
        return (
            <div className="Dashboard">
                <div className="searchbar">
                    <form onSubmit={this.search}>
                        <input type="text" placeholder="Search your favorite food here.." />
                        <input type="submit" value="Find" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Dashboard;