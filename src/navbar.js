import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
// 
const navbar=()=>{
    return(
        <div className="navbar">
            <h1>Welcome</h1>
            <button>
                <Link to="/Articles">Sign in to continue</Link>
            </button>
            
            <img src="image 1.png" alt="Placeholder 2" />
        </div>
    );
};
export default navbar;