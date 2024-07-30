import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () =>{

    

    const [btnNameReact, setbtnNameReact] = useState("login");


    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Offer</li>
                    <li>About Us</li>
                    <li>Cart</li>
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