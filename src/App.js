import React from 'react';
import './App.css';
import Home from './screens/Home';

import store from './store';
import { Provider } from 'react-redux';
// import Login from './screens/Login';
// import Profile from './screens/Profile';

class App extends React.Component {
  state = {
    showProfile: false
  }

  // afterLogin() {
  //   this.setState({ showProfile: true });
  // }

  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Home/>
          {/* {!this.state.showProfile ? <Login afterLogin={this.afterLogin.bind(this)}/> : <Profile />} */}
        </div>
      </Provider>
    );
  }
}

export default App;
