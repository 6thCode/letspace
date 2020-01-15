import React from 'react'
import '../../styles/ComponentStyles.scss'

const singlePageImageGallerySmall = (props) => {
    return(
        <div className="single-page-gallery-small">
            <img src={props.imageGallerySmall} alt=""/>
        </div>
    )
}

export default singlePageImageGallerySmall;