import React, { Component, Fragment } from 'react'

export default class AuthLayout extends Component {
    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }
}
