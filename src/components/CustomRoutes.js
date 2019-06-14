import React from 'react';
import { Router, Route } from 'react-router-dom';


import Navbar from '../screens/Navbar';

import Home from '../screens/Home';
import UserLogin from '../screens/UserLogin';
import RestaurantLogin from '../screens/RestaurantLogin';
import UserSignup from '../screens/UserSignup';
import RestaurantSignup from '../screens/RestaurantSignup';

import Dashboard from '../screens/Dashboard';

import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

const CustomeRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/userLogin" component={UserLogin} />
            <Route path="/restaurantLogin" component={RestaurantLogin} />
            <Route path="/userSignup" component={UserSignup} />
            <Route path="/restaurantSignup" component={RestaurantSignup} />

            <Route path="/dashboard" component={Dashboard} />
        </div>
    </Router>
)

export default CustomeRoutes;