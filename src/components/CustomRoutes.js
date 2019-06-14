import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../screens/Navbar';

import Home from '../screens/Home';
import UserLogin from '../screens/UserLogin';
import RestaurantLogin from '../screens/RestaurantLogin';
import UserSignup from '../screens/UserSignup';
import RestaurantSignup from '../screens/RestaurantSignup';

const CustomeRoutes = () => (
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/userLogin" component={UserLogin} />
            <Route path="/restaurantLogin" component={RestaurantLogin} />
            <Route path="/userSignup" component={UserSignup} />
            <Route path="/restaurantSignup" component={RestaurantSignup} />
        </div>
    </Router>
)

export default CustomeRoutes;