import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
                    <Link className="link" to="/userLogin">
                        <span onClick={() => { this.setState({ isLogin: true }) }} > Log in</span>
                    </Link>
                    <Link className="link" to="/userSignup">
                        <span onClick={() => { this.setState({ isLogin: false }) }} >Register</span>
                    </Link>
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