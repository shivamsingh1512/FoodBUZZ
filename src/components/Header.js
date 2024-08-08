import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () =>{

    

    const [btnNameReact, setbtnNameReact] = useState("login");


    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/offers">Offer</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link>Cart</Link>
                    </li>
                    <button className="login" 
                    onClick={() => {
                        btnNameReact ==="login"? setbtnNameReact("logout"):setbtnNameReact("login") ;
                        console.log(btnNameReact);
                    }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;