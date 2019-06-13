import React, { Component } from "react";

class UserSignup extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="UserSignup">
                <h2>Sing up - User</h2>
                <input type="text" placeholder="Full name" /><br />
                <input type="email" placeholder="Email" /><br />
                <label>
                    <input type="radio" />
                    Male
                </label>
                <label>
                    <input type="radio" />
                    Female
                </label><br />
                <input type="number" placeholder="Age" /><br />
                <select>
                    <option>--Country--</option>
                    <option>Pakistan</option>
                </select>
                <select>
                    <option>--City--</option>
                    <option>Karachi</option>
                    <option>Lahore</option>
                    <option>Islamabad</option>
                    <option>Peshawar</option>
                </select><br />
                <input type="password" placeholder="Password" /><br />
                <input type="password" placeholder="Confirm Password" /><br />
                <input type="submit" /><br />
            </div>
        )
    }
}

export default UserSignup;