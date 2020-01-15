import React, { Fragment } from 'react'
import '../../styles/TrendingLocation.scss'


const trendingLocation = (props) => {
    return(
        <Fragment>
            <div className="trending-location">
                <div className="trending-img">
                    <img src={props.spaceImage} alt="letspace" style={{padding: 0}} />
                    <div className="trending-img-overlay">
                        <div>
                            <p style={{marginBottom: 6}}>{props.name}</p>
                            <p>{props.country}</p>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default trendingLocation;