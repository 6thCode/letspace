import React, { Component, Fragment } from 'react'
import '../../styles/Property.scss'
import MainButton from '../components/mainButton'
import AuthInput from '../components/authInput'
import propertyImages from '../../img/propertyImages.png'

export default class Property extends Component {
    state = {
        works: [
            {id: "1", title: "List your property", details: "Share any space without sign-up fees, from a shared apartment to an entire home and everything else."},
            {id: "2", title: "Lorem Ipsum", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
            {id: "3", title: "Welcome your guest", details: "Once your listing is live, qualified guests will reach out."}
        ],
        payment: [
            {id: "1", title: "Set up your property", details: "Set your price, dates, rules, and more. We give you the tools to make sure you’re in control."},
            {id: "2", title: "Get the perfect match", details: "We’ll connect you to  a global network of travelers looking for the perfect match."},
            {id: "3", title: "Get paid immediately", details: "We’ll help you secure payment, deduct a commission, and send you the balance."}
        ]
    }
    render() {
        const displayBtn = { 
            color: "#fff" ,
            fontSize: "14px",
            lineHeight: "16px",
            fontWeight: 'bold',
        };
        return (
            <Fragment>
                <div className="property-jumbo-section">
                    <div className="property-jumbo-section-overlay"></div>
                </div>
                <div className="container">
                <div className="container position-relative">
                        <div className="property-details">
                            <h1>See how much you could earn as a letspace host!</h1>
                            <label>
                                <p>Find out what you could earn even for a night</p>
                                <div className="position-relative">
                                    <span className="main-icon-left">
                                        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 0C2.65714 0 0 2.65714 0 6C0 10.4571 6 17.1429 6 17.1429C6 17.1429 12 10.4571 12 6C12 2.65714 9.34286 0 6 0ZM6 8.14286C4.8 8.14286 3.85714 7.2 3.85714 6C3.85714 4.8 4.8 3.85714 6 3.85714C7.2 3.85714 8.14286 4.8 8.14286 6C8.14286 7.2 7.2 8.14286 6 8.14286Z" fill="#333333" fillOpacity="0.5"/>
                                        </svg>
                                    </span>
                                    <AuthInput placeholder="Everywhere Anywhere"/>
                                </div>
                            </label>
                            <div className="d-flex justify-content-between">
                                <div className="position-relative">
                                    <select>
                                        <option>Entire place</option>
                                    </select>
                                    <span className="main-icon-right">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.6 0L6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0Z" fill="#333333" fillOpacity="0.5"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className="position-relative">
                                    <select>
                                        <option>3 guests</option>
                                    </select>
                                    <span className="main-icon-right">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.6 0L6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0Z" fill="#333333" fillOpacity="0.5"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="position-relative">
                                    <select>
                                        <option>3 bedrooms</option>
                                    </select>
                                    <span className="main-icon-right">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.6 0L6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0Z" fill="#333333" fillOpacity="0.5"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className="position-relative">
                                    <select>
                                        <option>2 bathrooms</option>
                                    </select>
                                    <span className="main-icon-right">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.6 0L6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0Z" fill="#333333" fillOpacity="0.5"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div style={displayBtn}>
                                <MainButton btnType="main-button" title="Get started"/>
                            </div>
                        </div>
                    </div>
                    <div className="property-host">
                        <div className="property-host-section">
                            <h1>How it works</h1>
                            <div className="d-flex justify-content-between">
                                <div className="col-md-4">
                                    <h2>{this.state.works[0].title}</h2>
                                    <p>{this.state.works[0].details}</p>
                                </div>
                                <div className="col-md-4">
                                    <h2>{this.state.works[1].title}</h2>
                                    <p>{this.state.works[1].details}</p>
                                </div>
                                <div className="col-md-4">
                                    <h2>{this.state.works[2].title}</h2>
                                    <p>{this.state.works[2].details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex">
                        <div className="col-md-6">
                            <p>Discover great opportunities</p>
                            <h2>Simply the perfect home rental solution</h2>
                        </div>
                        <div className="col-md-6">
                            <img src={propertyImages} width={765.71} height={873.3} alt="property Images"/>
                        </div>
                    </div>
                </div>    
                <div className="container">
                    <div className="property-host-section">
                        <h1>Simplfied payment method</h1>
                        <div className="d-flex justify-content-between">
                            <div className="col-md-4">
                                <h2>{this.state.payment[0].title}</h2>
                                <p>{this.state.payment[0].details}</p>
                            </div>
                            <div className="col-md-4">
                                <h2>{this.state.payment[1].title}</h2>
                                <p>{this.state.payment[1].details}</p>
                            </div>
                            <div className="col-md-4">
                                <h2>{this.state.payment[2].title}</h2>
                                <p>{this.state.payment[2].details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
