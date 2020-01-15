import React from 'react'
import "../../styles/ComponentStyles.scss"

const buttonSocial = (props) => {
    return <a href="/#" className="button-social" style={{background: props.background}}>{props.title}</a>
};

export default buttonSocial;
