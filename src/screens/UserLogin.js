import React, { Component } from "react";

class UserLogin extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="UserLogin">
                <h2>Log in - User</h2>
                <input type="email" placeholder="Email" /><br />
                <input type="password" placeholder="Password" /><br />
                <input type="submit" /><br />
            </div>
        )
    }
}

export default UserLogin;