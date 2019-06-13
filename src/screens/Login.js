import React from 'react';
import { update_user } from '../store/action';

class Login extends React.Component {
    login() {
        //firebase api
        const user = { name: 'kashif', age: 40, profile_pic: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' }

        // update_user(user); how to call action?
        this.props.afterLogin();
    }

    render() {
        return (
            <div>
                <input placeholder="email" />
                <input placeholder="password" />

                <button onClick={this.login.bind(this)}>Login</button>
            </div>
        )
    }
}

export default Login;
