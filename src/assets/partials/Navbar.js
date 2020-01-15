import React, { useState } from 'react'
import "../../styles/Navbar.scss"
import { NavLink } from 'react-router-dom'
import { ReactComponent as MainLogo} from '../svgs/MainLogo.svg';
import { ReactComponent as NavLogo} from '../svgs/NavLogo.svg';
import { ReactComponent as LogIn} from '../svgs/LogIn.svg';
import { ReactComponent as Property} from '../svgs/Property.svg';
import { ReactComponent as Help} from '../svgs/Help.svg';
import { ReactComponent as SignUp} from '../svgs/SignUp.svg';



 const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    return ( 
    <div className="container-fuild">
        <nav className="navbar navbar-light container">
            <a className="navbar-brand" href="/#"><MainLogo /></a>
            <button className="navbar-toggle-icon" onClick={() => setShowNavbar(!showNavbar)}>
                <span></span>
                <span></span>
            </button>
        </nav>
       
            <div className={`hidden-header ${showNavbar ? 'slideIn': 'hide'}`}>
            <nav className="navbar container">
            <a className="navbar-brand" href="/#"><NavLogo /></a>
                <div className="navbar-links">
                    <ul>
                        <li><NavLink to="/property"><Property width={16} height={16} />Host a property</NavLink></li>
                        <li><NavLink to="/help"><Help width={16} height={16} />Help</NavLink></li>
                        <li><NavLink to="/signup"><SignUp width={16} height={16} />Sign up</NavLink></li>
                        <li><NavLink to="/signin"><LogIn width={16} height={16} />Sign in</NavLink></li>
                        <p onClick={()=> setShowNavbar(false)}>&#10005;</p>
                    </ul>
                </div>
            </nav>
        </div>
        
        
    </div>
    )
};

export default Navbar;