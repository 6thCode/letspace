import React, { Component, Fragment } from 'react'
import '../../styles/signIn.scss'
import ButtonSocial from '../components/buttonSocial'
import AuthInput from '../components/authInput'
import MainButton from '../components/mainButton'
import { Link } from 'react-router-dom'


export default class signUp extends Component {
    render() {
        return (
            <Fragment>
                <div className="auth-container">
                    <div className="auth-section">
                        <div className="auth-section-red">
                            <div className="auth-section-red-details">
                                <p>Create an account</p>
                                <div className="auth-content">
                                    <div className="auth-content-section">
                                        <ButtonSocial background="#4267B2" title="Sign Up using Facebook"/>
                                        <ButtonSocial background="#DD4B39" title="Sign Up using Google"/>
                                        <h2 className="background"><span className="line-behind">Or register with your details</span></h2>
                                        <AuthInput placeholder="Email"/>
                                        <AuthInput placeholder="Password"/>
                                        <div className="first-last">
                                            <AuthInput placeholder="First Name"/>
                                            <AuthInput placeholder="Last Name"/>
                                        </div>
                                        <AuthInput placeholder="Phone Number"/>
                                        <div className="remenber-forgot">
                                            <div className="cntr">
                                                <input className="hidden-xs-up" id="cbx" type="checkbox" />
                                                    <label className="cbx" htmlFor="cbx"></label><label className="lbl" htmlFor="cbx">    
                                                    By clicking here you have accepted our <span>Terms of Use</span> and our <span>Privacy</span>
                                                </label>
                                            </div>
                                            {/* <a>Forgot your password?</a> */}
                                        </div>
                                        <MainButton btnType="main-button" title="Sign Up"/>
                                        <p className="account">Already have an account? <span><Link to="/signin">Sign In</Link></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="whiteview"></div> */}
                    </div>
                </div>
            </Fragment>
        )
    }
}
