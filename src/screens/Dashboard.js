import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
                <div className="tabs">
                    <Link className="link" to="/restaurants">
                        <span onClick={() => { this.setState({ isLogin: true }) }}>Restaurants</span>
                    </Link>
                    <Link className="link" to="/myrequests">
                        <span onClick={() => { this.setState({ isLogin: false }) }}>My Requests</span>
                    </Link>
                </div>
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