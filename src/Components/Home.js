import React from 'react';
import Tesla from '../imgs/bg4.jpg';
import logo from '../imgs/1.png';
import logo2 from '../imgs/teslalogo.png';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <div id="car1">

            <div className="Header1">
                    <img src={logo2} className="logo" alt="logo"/>
                    <Link className="button" to="/register" style={{ float: "Right", backgroundColor: "black" }}>Register</Link>
                    <Link className="button" to="/login" style={{ float: "Right", backgroundColor: "black"}}>Login</Link>
            </div>

                <div className= "center">
                <h1 style={{paddingTop: "100px", fontSize: "2em"}}>Flaming Hot Speecial One</h1>
                <a href="#"><div className="transbutton">order now</div></a>
                <a href="#"><div className="transbutton">learn more</div></a>
                <a href="#"><div className="transbutton">faqs</div></a>
                <a href="#"><div className="transbutton">shop </div></a>
                </div>
            </div>
            <div id="car2">
                <div className= "center">
                <h1 style={{paddingTop: "100px", fontSize: "2em", color: 'white'}}>Flaming cheese hot</h1>
                <a href="#"><div className="transbutton1">order now</div></a>
                <a href="#"><div className="transbutton1">learn more</div></a>
                <a href="#"><div className="transbutton1">faqs</div></a>
                <a href="#"><div className="transbutton1">shop </div></a>
                </div>
            </div>
            <div id="car3">
                <div className= "center">
                <h1 style={{paddingTop: "100px", fontSize: "2em"}}>Flaming extra hot</h1>
                <a href="#"><div className="transbutton">order now</div></a>
                <a href="#"><div className="transbutton">learn more</div></a>
                <a href="#"><div className="transbutton">faqs</div></a>
                <a href="#"><div className="transbutton">shop </div></a>
                </div>
            </div>
        </div>
    );
}

export default Home;
