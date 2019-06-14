import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
                    <Link className="link" to="/restaurantLogin">
                        <span onClick={() => { this.setState({ isLogin: true }) }} > Log in</span>
                    </Link>
                    <Link className="link" to="/restaurantSignup">
                        <span onClick={() => { this.setState({ isLogin: false }) }} >Register</span>
                    </Link>
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