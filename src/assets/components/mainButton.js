import React from 'react'
import '../../styles/ComponentStyles.scss'
import { Link } from 'react-router-dom';

const mainButton = (props) => {
    return <Link to="/#" onClick={props.handleClick} className={props.btnType}>{props.title}</Link>
}

export default mainButton;