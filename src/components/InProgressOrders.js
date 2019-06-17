import React, { Component } from "react";
import { Link } from 'react-router-dom';

class InProgressOrders extends Component {
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
            <div className="InProgressOrders Dashboard">
                <div className="tabs">
                    <Link className="link" to="/restaurant/pending">
                        <span onClick={() => { this.setState({ isLogin: true }) }}>Pending</span>
                    </Link>
                    <Link className="link" to="/restaurant/inprogress">
                        <span onClick={() => { this.setState({ isLogin: false }) }}>In Progress</span>
                    </Link>
                    <Link className="link" to="/restaurant/delivered">
                        <span onClick={() => { this.setState({ isLogin: false }) }}>Delivered</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default InProgressOrders;