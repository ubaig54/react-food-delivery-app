import React, { Component } from "react";

class RestaurantLogin extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="RestaurantLogin">
                <h2>Log in - Restaurant</h2>
                <input type="email" placeholder="Email" /><br />
                <input type="password" placeholder="Password" /><br />
                <input type="submit" /><br />
            </div>
        )
    }
}

export default RestaurantLogin;