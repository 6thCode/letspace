import React, { Component, Fragment } from 'react'
import Navbar from '../assets/partials/Navbar'
import Footer from '../assets/partials/Footer'

export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                    {this.props.children}
                <Footer/>
            </Fragment>
        )
    }
}
