import React from 'react'
import "../../styles/InnerNavbar.scss"
import { Link } from 'react-router-dom'
import { ReactComponent as NavLogo} from '../svgs/NavLogo.svg';
import { ReactComponent as LogIn} from '../svgs/LogIn.svg';
import { ReactComponent as Property} from '../svgs/Property.svg';
import { ReactComponent as Help} from '../svgs/Help.svg';
import { ReactComponent as SignUp} from '../svgs/SignUp.svg';

const InnerNavbar = () => {
    return (
            <div className="container-fuild">
            <div className="inner-header">
            <nav className="navbar container">
            <a className="navbar-brand" href="/#"><NavLogo /></a>
                <div className="navbar-links">
                    <ul>
                        <li><Link to="/property"><Property width={16} height={16} />Host a property</Link></li>
                        <li><Link to="/help"><Help width={16} height={16} />Help</Link></li>
                        <li><Link to="/signup"><SignUp width={16} height={16} />Sign up</Link></li>
                        <li><Link to="/signin"><LogIn width={16} height={16} />Sign in</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    )
}

export default InnerNavbar;