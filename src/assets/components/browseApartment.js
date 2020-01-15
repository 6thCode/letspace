import React, { Fragment } from 'react';
import '../../styles/browseApartment.scss'
import StarRating from './starRating'

const browseApartment = (props) => {
    return(
        <Fragment>
            <div className="browse-apartment-section">
                <div className="browse-apartment-section-image">
                    <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80" alt="" />
                </div>
                <div className="browse-apartment-section-details">
                    <p>{props.apartName}</p>
                    <p>{props.apartLoc}</p>
                    <p>{props.apartPrice}</p>
                    <StarRating />
                </div>
            </div>
        </Fragment>
    )
}

export default browseApartment;