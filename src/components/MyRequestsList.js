import React, { Component } from "react";

class MyRequestsList extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="MyRequestsList">
                <div className="horizontal">
                    <div className="head">
                        <div className="orderNum">
                            Order no: {this.props.orderNum}
                        </div>
                        <div className="rating">
                            Rating
                        </div>
                    </div>
                    <div className="title oneFourth myRequestsCells">
                        {this.props.title}
                    </div>
                    <div className="quantity oneFourth myRequestsCells">
                        Qty: {this.props.quantity}
                    </div>
                    <div className="status oneFourth myRequestsCells">
                        {this.props.status}
                    </div>
                    <div className="Total oneFourth myRequestsCells">
                        Total: {this.props.total}/-
                    </div>
                </div>
            </div>
        )
    }
}

export default MyRequestsList;