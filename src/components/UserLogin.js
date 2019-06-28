import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { loginUser } from '../store/actions/authActions';

class UserLogin extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: true,

            email: '',
            password: '',

            isCredentials: true,
        }

        this.userLogin = this.userLogin.bind(this);
    }

    async userLogin() {
        const { email, password } = this.state;

        try {
            const loginUserReturn = await loginUser({ email, password });
            console.log('loginUserReturn', loginUserReturn)
            this.props.history.push('/user/restaurants');
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { isCredentials } = this.state;
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
                {!isCredentials && <div className="formError">Email or password is incorrect</div>}
                <input onChange={(e) => { this.setState({ email: e.target.value }) }} type="email" placeholder="Email" /><br />
                <input onChange={(e) => { this.setState({ password: e.target.value }) }} type="password" placeholder="Password" /><br />
                <input onClick={this.userLogin} type="submit" value="Log in" /><br />
            </div>
        )
    }
}

export default UserLogin;