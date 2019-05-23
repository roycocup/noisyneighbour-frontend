import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";



class Header extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={}
    }


    Login(isLoggedIn)
    {
        let resp = null;

        if (isLoggedIn == true)
        {
            resp = 
            <li className="nav-item">
                <Link to={"/register"} className="nav-link">Register</Link>
            </li>;
        } else {
            resp = 
            <li className="nav-item">
                <Link to={"/report"} className="nav-link">Report</Link>
            </li>;
        }

        return resp;
    }

    render()
    {
        return (
            <div className="mmenu mmenu-header">
                <nav className="navbar navbar-expand-lg">
                    <Link to={"/"} className="navbar-brand">
                        <div className="logo">
                            <img src="./files/NoisyNeighbourLogo.png" alt="Logo" height="100 px"/>
                        </div>
                    </Link>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {this.Login(false)}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;  