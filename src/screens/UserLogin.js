import React, { Component } from "react";

class UserLogin extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: true,
        }
    }

    render() {
        return (
            <div className="UserLogin login">
                <div className="tabs">
                    <span onClick={() => { this.setState({ isLogin: true }) }} > Log in</span>
                    <span onClick={() => { this.setState({ isLogin: false }) }} >Register</span>
                </div>
                <h2>Log in - User</h2>
                <input type="email" placeholder="Email" /><br />
                <input type="password" placeholder="Password" /><br />
                <input type="submit" value="Log in" /><br />
            </div>
        )
    }
}

export default UserLogin;