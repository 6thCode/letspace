import React, { Component, Fragment } from 'react'
import SearchField from '../components/searchField'
import ListingWithFilter from '../components/listingWithFilter'



export default class Listing extends Component {
    state = {
        browse: [
            { id: '1', apartType: 'ENTIRE APARTMENT', apartName: 'SHANGHIGH HOME', apartPrice: 'Price N5,000 per night', apartLocation: 'Lagos, Nigeria', apartImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '2', apartType: 'ENTIRE APARTMENT', apartName: 'SHANGHIGH HOME', apartPrice: 'Price N5,000 per night', apartLocation: 'Lagos, Nigeria', apartImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '3', apartType: 'ENTIRE APARTMENT', apartName: 'SHANGHIGH HOME', apartPrice: 'Price N5,000 per night', apartLocation: 'Lagos, Nigeria', apartImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '4', apartType: 'ENTIRE APARTMENT', apartName: 'SHANGHIGH HOME', apartPrice: 'Price N5,000 per night', apartLocation: 'Lagos, Nigeria', apartImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' }
        ],
    }

    render() {
        const browse = this.state.browse.map( ListingWithFilters => {
            return <ListingWithFilter 
                apartImage={ListingWithFilters.apartImage}
                apartType={ListingWithFilters.apartType}
                apartName={ListingWithFilters.apartName}
                apartPrice={ListingWithFilters.apartPrice}
                apartLocation={ListingWithFilters.apartLocation}
                key={ListingWithFilters.id}
            />
        })
        return (
            <Fragment>
                <SearchField/>
                <div className="container">
                    {browse}
                </div>
            </Fragment>
        )
    }
}