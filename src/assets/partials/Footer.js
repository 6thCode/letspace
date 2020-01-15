import React from 'react';
import '../../styles/Footer.scss';
import { ReactComponent as FooterLogo } from '../svgs/FooterLogo.svg';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="newsletter">
                <p>Subcribe on our newsletter and stay current on rental deals and specials.</p>
                <input type="text" placeholder="Enter your email address"/>
                <button className="">Subscribe</button>
            </div>
            <div className="footer-container-main">
                <div className="container display">
                    <div className="main-content">
                        <FooterLogo />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className="copyright">Copyright © 2019 Letspace.co. All rights reserved.</p>
                    </div>
                    <div className="main-other">
                        <ul>
                            <li><p>About Us</p></li>
                            <li><a href="/#">Careers</a></li>
                            <li><a href="/#">Blog</a></li>
                            <li><a href="/#">Get Help</a></li>
                            <li><a href="/#">Diversity & Belonging</a></li>
                        </ul>
                        <ul>
                            <li><p>More</p></li>
                            <li><a href="/#">FAQ & Support</a></li>
                            <li><a href="/#">Investors</a></li>
                            <li><a href="/#">Contact Us</a></li>
                            <li><a href="/#">Payment Method</a></li>
                        </ul>
                        <ul>
                            <li><a href="/#">Terms of Service</a></li>
                            <li><a href="/#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;


