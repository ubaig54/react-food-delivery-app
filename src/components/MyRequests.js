import React, { Component } from "react";
import { Link } from 'react-router-dom';

import MyRequestsList from './MyRequestsList';

class MyRequests extends Component {
    constructor() {
        super();
        this.state = {

        }

        this.search = this.search.bind(this);
    }

    search() {

    }

    render() {
        return (
            <div className="MyRequests Dashboard">
                <div className="tabs">
                    <Link className="link" to="/restaurants">
                        <span onClick={() => { this.setState({ isLogin: true }) }}>Restaurants</span>
                    </Link>
                    <Link className="link" to="/myrequests">
                        <span onClick={() => { this.setState({ isLogin: false }) }}>My Requests</span>
                    </Link>
                </div>
                <div className="myRequestsList">
                    <h2>Track your orders</h2>
                    <MyRequestsList orderNum={"545146817"} title={"Pizza"} quantity={"2"} status={"In Process"} total={"1,580"} />
                    <MyRequestsList orderNum={"5462161826"} title={"Cake"} quantity={"1"} status={"Pending"} total={"600"} />
                    <MyRequestsList orderNum={"545146817"} title={"Pizza"} quantity={"2"} status={"In Process"} total={"1,580"} />
                    <MyRequestsList orderNum={"5462161826"} title={"Cake"} quantity={"1"} status={"Pending"} total={"600"} />
                    <MyRequestsList orderNum={"545146817"} title={"Pizza"} quantity={"2"} status={"In Process"} total={"1,580"} />
                    <MyRequestsList orderNum={"5462161826"} title={"Cake"} quantity={"1"} status={"Pending"} total={"600"} />
                </div>
            </div>
        )
    }
}

export default MyRequests;