import React from 'react';
import { Router, Route } from 'react-router-dom';


import Navbar from '../screens/Navbar';

import Home from '../screens/Home';
import UserLogin from '../screens/UserLogin';
import RestaurantLogin from '../screens/RestaurantLogin';
import UserSignup from '../screens/UserSignup';
import RestaurantSignup from '../screens/RestaurantSignup';

import Dashboard from '../screens/Dashboard';
import Restaurants from '../components/Restaurants';
import MyRequests from '../components/MyRequests';

import { createBrowserHistory } from 'history';
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
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/myrequests" component={MyRequests} />
        </div>
    </Router>
)

export default CustomeRoutes;