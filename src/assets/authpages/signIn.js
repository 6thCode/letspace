import React, { Component, Fragment } from 'react'
import '../../styles/signIn.scss'
import ButtonSocial from '../components/buttonSocial'
import AuthInput from '../components/authInput'
import MainButton from '../components/mainButton'
import { Link } from 'react-router-dom'

export default class signIn extends Component {
    render() {
        return (
            <Fragment>
                <div className="auth-container">
                    <div className="auth-section">
                        <div className="auth-section-red">
                            <div className="auth-section-red-details">
                                <p>Sign in on Letspace</p>
                                <div className="auth-content">
                                    <div className="auth-content-section">
                                        <ButtonSocial background="#4267B2" title="Sign In with Facebook"/>
                                        <ButtonSocial background="#DD4B39" title="Sign In with Google"/>
                                        <h2 className="background"><span className="line-behind">Or log In with your details</span></h2>
                                        <AuthInput placeholder="Email"/>
                                        <AuthInput placeholder="Password"/>
                                        <div className="remenber-forgot">
                                            <div className="cntr">
                                                <input className="hidden-xs-up" id="cbx" type="checkbox" />
                                                    <label className="cbx" htmlFor="cbx"></label><label className="lbl" htmlFor="cbx">
                                                    Remeber me</label>
                                            </div>
                                            <a href="/#">Forgot your password?</a>
                                        </div>
                                        <MainButton btnType="main-button" title="Sign In"/>
                                        <p className="account">Don’t have an account? <span><Link to="/signup">Sign Up</Link></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
