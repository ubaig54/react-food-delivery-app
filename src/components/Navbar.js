import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isUser: false,
            isLoginClicked: false,
        }
    }

    render() {
        const { isUser, isLoginClicked } = this.state;
        return (
            <header>
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" onClick={() => { this.setState({ isUser: false, isLoginClicked: false, }) }} />
                        </Link>
                    </div>
                    <nav>
                        {!isLoginClicked && !isUser && <Link className="link" to="userLogin" onClick={() => { this.setState({ isUser: true, isLoginClicked: true, }) }}>
                            <span>Login</span>
                        </Link>}
                        {isLoginClicked && isUser && <Link className="link" className="link" to="restaurantLogin" onClick={() => { this.setState({ isUser: false, isLoginClicked: true, }) }}>
                            <span>Login as Restaurant</span>
                        </Link>}
                        {isLoginClicked && !isUser && <Link className="link" to="userLogin" onClick={() => { this.setState({ isUser: true, isLoginClicked: true, }) }}>
                            <span>I want to order food</span>
                        </Link>}
                    </nav>
                </div>
            </header>
        )
    }
}

export default Navbar;