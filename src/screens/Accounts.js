import React, { Component } from "react";
import UserSignup from './UserSignup';
import UserLogin from './UserLogin';
import RestaurantSignup from './RestaurantSignup';
import RestaurantLogin from './RestaurantLogin';

class Accounts extends Component {
    constructor() {
        super();
        this.state = {
            isUser: true,
            isLogin: true,
        }
    }

    render() {
        const { isLogin, isUser } = this.state;
        return (
            <div className="Accounts">
                <div className="tabs">
                    <span onClick={() => { this.setState({ isLogin: true }) }} > Log in</span>
                    <span onClick={() => { this.setState({ isLogin: false }) }} >Register</span>
                </div>
                {isLogin && isUser && <UserLogin />}
                {!isLogin && isUser && <UserSignup />}
                {isLogin && !isUser && <RestaurantLogin />}
                {!isLogin && !isUser && <RestaurantSignup />}
            </div>
        )
    }
}

export default Accounts;