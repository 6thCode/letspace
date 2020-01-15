import React, { Fragment } from 'react'
import "../../styles/ComponentStyles.scss"

const listingWithFilter =(props) => {

    return(
        <Fragment>
            <div className="listing-with-filter">
                <div className="listing-with-filter-image">
                    <img src={props.apartImage} alt=""/>
                </div>
                <div>
                    <p>{props.apartType}</p>
                    <h1>{props.apartName}</h1>
                    <p>{props.apartPrice}</p>
                    <p>{props.apartLocation}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default listingWithFilter;