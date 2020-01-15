import React, { Fragment } from 'react'
import DatePickerStart from '../components/DatePickerStart'
import DatePickerEnd from '../components/DatePickerEnd'
import MainButton from '../components/mainButton'
import AuthInput from '../components/authInput'

const searchField = () => {
    const displayBtn = { 
        color: "#fff" ,
        fontSize: "14px",
        lineHeight: "16px",
        fontWeight: 'bold',
        width: '100px',
        height: '40px'
    };
    return (
        <Fragment>
            <div className="background-search">
                <div className="container">
                    <div className="d-flex justify-content-between" style={{marginTop: 14}}>
                        <div className="position-relative">
                            <div style={{width: 460}}>
                                <span className="main-icon-left">
                                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6 0C2.65714 0 0 2.65714 0 6C0 10.4571 6 17.1429 6 17.1429C6 17.1429 12 10.4571 12 6C12 2.65714 9.34286 0 6 0ZM6 8.14286C4.8 8.14286 3.85714 7.2 3.85714 6C3.85714 4.8 4.8 3.85714 6 3.85714C7.2 3.85714 8.14286 4.8 8.14286 6C8.14286 7.2 7.2 8.14286 6 8.14286Z" fill="#333333" fillOpacity="0.5"/>
                                    </svg>
                                </span>
                                <AuthInput placeholder="Everywhere Anywhere"/>
                            </div>
                        </div>
                        <div className="position-relative">
                            <div styles={{width: 162}}>
                                <span className="main-icon-left">
                                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1111 7.94444H6.5V11.5556H10.1111V7.94444ZM9.38889 0V1.44444H3.61111V0H2.16667V1.44444H1.44444C0.65 1.44444 0 2.09444 0 2.88889V13C0 13.7944 0.65 14.4444 1.44444 14.4444H11.5556C12.35 14.4444 13 13.7944 13 13V2.88889C13 2.09444 12.35 1.44444 11.5556 1.44444H10.8333V0H9.38889ZM11.5555 13H1.44436V5.05555H11.5555V13Z" fill="#333333" fillOpacity="0.5"/>
                                    </svg>
                                </span>
                                <DatePickerStart/>
                            </div>
                        </div>
                        <div className="position-relative">
                            <div styles={{width: 162}}>
                                <span className="main-icon-left">
                                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1111 7.94444H6.5V11.5556H10.1111V7.94444ZM9.38889 0V1.44444H3.61111V0H2.16667V1.44444H1.44444C0.65 1.44444 0 2.09444 0 2.88889V13C0 13.7944 0.65 14.4444 1.44444 14.4444H11.5556C12.35 14.4444 13 13.7944 13 13V2.88889C13 2.09444 12.35 1.44444 11.5556 1.44444H10.8333V0H9.38889ZM11.5555 13H1.44436V5.05555H11.5555V13Z" fill="#333333" fillOpacity="0.5"/>
                                    </svg>
                                </span>
                                <DatePickerEnd/>
                            </div>
                        </div>
                        <div className="position-relative">
                            <div style={{width: 130}}>
                                <span className="main-icon-left">
                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.4545 6.54545C13.2545 6.54545 14.7272 5.07273 14.7272 3.27273C14.7272 1.47273 13.2545 0 11.4545 0C9.65447 0 8.18174 1.47273 8.18174 3.27273C8.18174 5.07273 9.65447 6.54545 11.4545 6.54545ZM4.09091 4.90909V2.45454H2.45455V4.90909H0V6.54545H2.45455V9H4.09091V6.54545H6.54545V4.90909H4.09091ZM11.4546 8.18182C9.24549 8.18182 4.90913 9.24546 4.90913 11.4545V13.0909H18V11.4545C18 9.24546 13.6637 8.18182 11.4546 8.18182Z" fill="#333333" fillOpacity="0.5"/>
                                </svg>
                            </span>
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
                        <div style={displayBtn}>
                            <MainButton btnType="main-button" title="Search"/>
                        </div>
                    </div>
                </div>
            </div>  
        </Fragment>
    )
}

export default searchField;