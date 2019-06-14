import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../screens/Navbar';

import Home from '../screens/Home';
import UserLogin from '../screens/UserLogin';
import RestaurantLogin from '../screens/RestaurantLogin';

const CustomeRoutes = () => (
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/userLogin" component={UserLogin} />
            <Route path="/restaurantLogin" component={RestaurantLogin} />
        </div>
    </Router>
)

export default CustomeRoutes;