import React from 'react'
import '../../styles/ComponentStyles.scss'

const singlePageImageGallery = (props) => {
    return(
        <div className="single-page-gallery">
            <img src={props.imageGallery} alt="" />
        </div>
    )
}

export default singlePageImageGallery;