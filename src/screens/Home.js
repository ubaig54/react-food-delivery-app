import React, { Component } from "react";
import UserSignup from './UserSignup';
import UserLogin from './UserLogin';
import RestaurantSignup from './RestaurantSignup';
import RestaurantLogin from './RestaurantLogin';

class Home extends Component {
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
            <div className="Home">
                <header>
                    <div className="container">
                        <div className="logo">
                            FOOD 24/7
                    </div>
                        <nav>
                            {isUser && <span onClick={() => { this.setState({ isUser: false }) }} >Login as Restaurant</span>}
                            {!isUser && <span onClick={() => { this.setState({ isUser: true }) }} >I want to order food</span>}
                        </nav>
                    </div>
                </header>
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

export default Home;