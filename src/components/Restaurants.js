import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Thumbnail from './Thumbnail';

import img1 from '../assets/images/img-1.jpg';
import img2 from '../assets/images/img-2.jpg';

class Restaurants extends Component {
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
            <div className="Restaurants Dashboard">
                <div className="tabs">
                    <Link className="link" to="/restaurants">
                        <span onClick={() => { this.setState({ isLogin: true }) }}>Restaurants</span>
                    </Link>
                    <Link className="link" to="/myrequests">
                        <span onClick={() => { this.setState({ isLogin: false }) }}>My Requests</span>
                    </Link>
                </div>
                <div className="searchbar">
                    <form onSubmit={this.search}>
                        <input type="text" placeholder="Search your favorite food here.." />
                        <input type="submit" value="Find" />
                    </form>
                </div>
                <div className="chips">
                    <span>BBQ</span>
                    <span>Chineese</span>
                    <span>Fast Food</span>
                    <span>Desi</span>
                    <span>Buffet</span>
                    <span>Pizzeria</span>
                    <span>Desserts</span>
                    <span>Cafe</span>
                </div>
                <div className="thumbnailList">
                    <Thumbnail img={img1} title="Del Frio" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..." />
                    <Thumbnail img={img2} title="Pizza Hut" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..." />
                    <Thumbnail img={img1} title="Del Frio" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..." />
                    <Thumbnail img={img2} title="Pizza Hut" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..." />
                    <Thumbnail img={img1} title="Del Frio" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..." />
                    <Thumbnail img={img2} title="Pizza Hut" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..." />
                    <Thumbnail img={img1} title="Del Frio" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..." />
                    <Thumbnail img={img2} title="Pizza Hut" description="This is the description of the above mentioned restaurant so user will know bettter about the servings..." />
                </div>
            </div>
        )
    }
}

export default Restaurants;