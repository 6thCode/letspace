import React, { Fragment } from 'react'

const mapImage = (props) =>  {
    return(
        <Fragment>
            <div className="image-section active">
                <div className="">
                    <img src={props.image} alt="location" />
                </div>
                <div className="location-name">
                    <div>
                        <p>{props.location}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default mapImage;
