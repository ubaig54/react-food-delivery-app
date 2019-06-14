import React, { Component } from "react";

class RestaurantLogin extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="RestaurantLogin login">
                <div className="tabs">
                    <span onClick={() => { this.setState({ isLogin: true }) }} > Log in</span>
                    <span onClick={() => { this.setState({ isLogin: false }) }} >Register</span>
                </div>
                <h2>Log in - Restaurant</h2>
                <input type="email" placeholder="Email" /><br />
                <input type="password" placeholder="Password" /><br />
                <input type="submit" value="Log in" /><br />
            </div>
        )
    }
}

export default RestaurantLogin;