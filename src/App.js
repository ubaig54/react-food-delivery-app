import React from 'react';
import './App.css';
import Accounts from './screens/Accounts';
import Home from './screens/Home';

import CustomRoutes from './components/CustomRoutes';

import store from './store';
import { Provider } from 'react-redux';
// import Login from './screens/Login';
// import Profile from './screens/Profile';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  // afterLogin() {
  //   this.setState({ showProfile: true });
  // }

  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <CustomRoutes />
          {/* <Home /> */}
          {/* <Accounts /> */}
          {/* {!this.state.showProfile ? <Login afterLogin={this.afterLogin.bind(this)}/> : <Profile />} */}
        </div>
      </Provider>
    );
  }
}

export default App;
