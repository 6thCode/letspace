import React, { Fragment } from 'react'
import '../../styles/ComponentStyles.scss'
import { ReactComponent as ErrorImage } from '../svgs/ErrorImage.svg'
import MainButton from '../components/mainButton'

const ErrorPage = () => {
    const backHomepage = {
        width: "326px",
        margin: 'auto',
        boxShadow: '0px 4px 20px rgba(141, 135, 135, 0.2)'
    }
    return (
        <Fragment>
            <div className="container error-page-section">
                <ErrorImage className="error-pic" />
                <div className="error-page-section-display">
                    <h1>Oh no!  We lost you here</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    <div style={backHomepage}>
                        <MainButton btnType="outline-button" title="Back to Homepage" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ErrorPage;
