import React from 'react'
import '../../styles/ComponentStyles.scss'

const authInput = (props) => {
    return<input className="auth-input" placeholder={props.placeholder} />
}

export default authInput;