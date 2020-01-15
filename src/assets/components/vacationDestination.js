import React, { Fragment } from 'react'

const vacationDestination = (props) => {
    return(
        <Fragment>
            <div className="site">
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80" alt="" />
                <div className="img-small-display-loc">
                    <p>{props.dest}</p>
                    <p>{props.destCountry}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default vacationDestination;