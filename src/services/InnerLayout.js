import React, { Component, Fragment } from 'react'
import InnerNavbar from '../assets/partials/InnerNavbar'
import Footer from '../assets/partials/Footer'

export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <InnerNavbar />
                    {this.props.children}
                <Footer/>
            </Fragment>
        )
    }
}