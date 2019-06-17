import React, { Component } from "react";
import { Link } from 'react-router-dom';

class RestaurantLogin extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: true,

            email: '',
            password: '',

            isCredentials: true,
        }

        this.restaurantLogin = this.restaurantLogin.bind(this);
    }

    restaurantLogin() {
        const { email, password } = this.state;

        if (email !== 'asd' && password !== 'asd') {
            this.setState({ isCredentials: false });
        } else {
            this.setState({ isCredentials: true });

            this.props.history.push('/restaurant/pending');
        }
    }

    render() {
        const { isCredentials } = this.state;
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
                {!isCredentials && <div className="formError">Email or password is incorrect</div>}
                <input onChange={(e) => { this.setState({ email: e.target.value }) }} type="email" placeholder="Email" /><br />
                <input onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" placeholder="Password" /><br />
                <input onClick={this.restaurantLogin} type="submit" value="Log in" /><br />
            </div>
        )
    }
}

export default RestaurantLogin;