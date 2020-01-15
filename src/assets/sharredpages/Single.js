import React, { Component, Fragment } from 'react'
import '../../styles/ComponentStyles.scss'
import '../../styles/Single.scss'
import SinglePageImageGallery from '../components/singlePageImageGallery'
import SinglePageImageGallerySmall from '../components/singlePageImageGallerySmall'
import Slider from "react-slick";
import SearchField from '../components/searchField'

export default class Single extends Component {
    state = {
        nav1: null,
        nav2: null,
        singleImageGallery: [
            { id: '1', imageGallery: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '2', imageGallery: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '3', imageGallery: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '4', imageGallery: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '5', imageGallery: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '6', imageGallery: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '7', imageGallery: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '8', imageGallery: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' }
        ],
        singleImageGallerySmall: [
            { id: '1', imageGallerySmall: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '2', imageGallerySmall: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '3', imageGallerySmall: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '4', imageGallerySmall: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '5', imageGallerySmall: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '6', imageGallerySmall: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '7', imageGallerySmall: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '8', imageGallerySmall: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' }
        ]
    }
    componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }
    render() {
        const singleImageGallery = this.state.singleImageGallery.map(singleImage => {
            return <SinglePageImageGallery
                imageGallery={singleImage.imageGallery}
                key={singleImage.id}
             />
        });
        const singleImageGallerySmall = this.state.singleImageGallerySmall.map(singleImageSmall => {
            return <SinglePageImageGallerySmall
                imageGallerySmall={singleImageSmall.imageGallerySmall}
                key={singleImageSmall.id}
             />
        })
        return (
            <Fragment>
                <SearchField/>
                <div className="container">
                    <div className="col-md-7">
                        <div>
                            <Slider
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}>
                                {singleImageGallery}
                            </Slider>
                            <Slider
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={6}
                            swipeToSlide={true}
                            focusOnSelect={true}>
                                {singleImageGallerySmall}
                            </Slider>
                        </div>
                        <div className="single-apartment-details">
                            <h1>Studio-Millennium Apartments.</h1>
                            <p>234 East Avenue, new york district, United state of america</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
