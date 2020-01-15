import React, { Fragment, Component } from 'react'
import "../../styles/Landing.scss"
import "../../styles/ComponentStyles.scss"
import "../../styles/CustomBtn.scss"
import { ReactComponent as CustomBtn } from '../svgs/CustomBtn.svg';
import AuthInput from '../components/authInput'
import MainButton from '../components/mainButton'
import TrendingLocation from '../components/trendingLocation'
import Slider from "react-slick";
import BrowseApartment from '../components/browseApartment'
import DatePickerStart from '../components/DatePickerStart'
import DatePickerEnd from '../components/DatePickerEnd'
import VacationDestination from '../components/vacationDestination'
import MapDot from '../../img/map-dots.png'
import MapImage from '../components/mapImage'
import locationOne from '../../img/location-one.png'
import locationTwo from '../../img/location-two.png'
import locationThree from '../../img/location-three.png'
import locationFour from '../../img/location-four.png'
import locationFive from '../../img/location-five.png'
import locationSix from '../../img/location-six.png'
import TravelerTopCountries from '../components/travelerTopCountries'
// import axios from 'axios'

export default class Landing extends Component {    
    onDatesChange = ({ startDate, endDate }) => {
        console.log(({ startDate, endDate }));
    }
    state = {
        trendinglocate: [
            { id: '1', name: 'Georgetowns place', country: 'New york, USA', spaceImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '2', name: 'Georgetowns place', country: 'New york, USA', spaceImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '3', name: 'Georgetowns place', country: 'New york, USA', spaceImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '4', name: 'Georgetowns place', country: 'New york, USA', spaceImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' },
            { id: '5', name: 'Georgetowns place', country: 'New york, USA', spaceImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80' }
        ],
        browse: [
            { id: '1', apartName: 'ENTIRE APARTMENT - LIVERPOOL', apartLoc: 'SHANGHIGH HOME', apartPrice: 'Price N5,000 per night' },
            { id: '2', apartName: 'ENTIRE APARTMENT - LIVERPOOL', apartLoc: 'SHANGHIGH HOME', apartPrice: 'Price N5,000 per night' },
            { id: '3', apartName: 'ENTIRE APARTMENT - LIVERPOOL', apartLoc: 'SHANGHIGH HOME', apartPrice: 'Price N5,000 per night' },
            { id: '4', apartName: 'ENTIRE APARTMENT - LIVERPOOL', apartLoc: 'SHANGHIGH HOME', apartPrice: 'Price N5,000 per night' }
        ],
        vacation: [
            { id: '1', dest: 'Georgetowns place', destCountry: 'New york, USA' },
            { id: '2', dest: 'Georgetowns place', destCountry: 'New york, USA' },
            { id: '3', dest: 'Georgetowns place', destCountry: 'New york, USA' },
            { id: '4', dest: 'Georgetowns place', destCountry: 'New york, USA' },
        ],
        map: [
            { id: '1', location: 'Nigeria' }
        ],
        topCountries:  [
            { id: '1', country: 'Panama City Beach' },
            { id: '2', country: 'Panama City Beach' },
            { id: '3', country: 'Panama City Beach' },
            { id: '4', country: 'Panama City Beach' },
            { id: '5', country: 'Panama City Beach' },
            { id: '6', country: 'Panama City Beach' },
            { id: '7', country: 'Panama City Beach' },
            { id: '8', country: 'Panama City Beach' },
            { id: '9', country: 'Panama City Beach' },
            { id: '10', country: 'Panama City Beach' },
            { id: '11', country: 'Panama City Beach' },
            { id: '12', country: 'Panama City Beach' },
            { id: '13', country: 'Panama City Beach' },
            { id: '14', country: 'Panama City Beach' },
            { id: '15', country: 'Panama City Beach' },
            { id: '16', country: 'Panama City Beach' },
            { id: '17', country: 'Panama City Beach' },
        ]
    }

    // componentDidMount() {
    //     axios.get("/hotels")
    //         .then(response => {
    //             this.setState({trendinglocate: response.data.data.items});
    //             console.log(response)
    //         })
    //     .catch(error => console.log( error ));
    // }
    
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        };
        const displayBtn = { 
            color: "#fff" ,
            fontSize: "14px",
            lineHeight: "16px",
            fontWeight: 'bold',
        };
        const addProperty = {
            width: "215px",
            color: "#fff",
            fontSize: "14px",
            lineHeight: "16px",
            fontWeight: 'bold',
            margin: 'auto',
        };
        const trendinglocate = this.state.trendinglocate.map(trending => {
            return <TrendingLocation 
                spaceImage={trending.spaceImage}
                name={trending.name}
                country={trending.country}
                key={trending.id}
            />
        });
        const browse = this.state.browse.map(browseHome => {
                return <BrowseApartment 
                apartName={browseHome.apartName}
                apartLoc={browseHome.apartLoc}
                apartPrice={browseHome.apartPrice}
                key={browseHome.id}
            />
        });
        const vacation = this.state.vacation.map(popularVacation => {
                return <VacationDestination 
                dest={popularVacation.dest}
                destCountry={popularVacation.destCountry}
                key={popularVacation.id}
            />
        });
        const topCountries = this.state.topCountries.map(topCountry => {
                return <TravelerTopCountries 
                country={topCountry.country}
                key={topCountry.id}
            />
        });
        return (
            <Fragment>
                <div className="home-jumbotron">
                    <div className="background-layout">
                        <div className="container">
                            <div className="background-layout-section container">
                                <div className="booking-menu">
                                    <h1>Book interesting homes, apartments and more.</h1>
                                    <label>
                                        <p>WHERE</p>
                                        <div className="position-relative">
                                            <span className="main-icon-left">
                                                <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 0C2.65714 0 0 2.65714 0 6C0 10.4571 6 17.1429 6 17.1429C6 17.1429 12 10.4571 12 6C12 2.65714 9.34286 0 6 0ZM6 8.14286C4.8 8.14286 3.85714 7.2 3.85714 6C3.85714 4.8 4.8 3.85714 6 3.85714C7.2 3.85714 8.14286 4.8 8.14286 6C8.14286 7.2 7.2 8.14286 6 8.14286Z" fill="#333333" fillOpacity="0.5"/>
                                                </svg>
                                            </span>
                                            <AuthInput placeholder="Everywhere Anywhere"/>
                                        </div>
                                    </label>
                                    <div className="booking-date">
                                        <label>
                                            <p>CHECK IN</p>
                                            <div className="position-relative">
                                                <span className="main-icon-left">
                                                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1111 7.94444H6.5V11.5556H10.1111V7.94444ZM9.38889 0V1.44444H3.61111V0H2.16667V1.44444H1.44444C0.65 1.44444 0 2.09444 0 2.88889V13C0 13.7944 0.65 14.4444 1.44444 14.4444H11.5556C12.35 14.4444 13 13.7944 13 13V2.88889C13 2.09444 12.35 1.44444 11.5556 1.44444H10.8333V0H9.38889ZM11.5555 13H1.44436V5.05555H11.5555V13Z" fill="#333333" fillOpacity="0.5"/>
                                                    </svg>
                                                </span>
                                                <DatePickerStart/>
                                            </div>
                                        </label>
                                        <label>
                                            <p>CHECK OUT</p>
                                            <div className="position-relative">
                                                <span className="main-icon-left">
                                                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1111 7.94444H6.5V11.5556H10.1111V7.94444ZM9.38889 0V1.44444H3.61111V0H2.16667V1.44444H1.44444C0.65 1.44444 0 2.09444 0 2.88889V13C0 13.7944 0.65 14.4444 1.44444 14.4444H11.5556C12.35 14.4444 13 13.7944 13 13V2.88889C13 2.09444 12.35 1.44444 11.5556 1.44444H10.8333V0H9.38889ZM11.5555 13H1.44436V5.05555H11.5555V13Z" fill="#333333" fillOpacity="0.5"/>
                                                    </svg>
                                                </span>
                                                <DatePickerEnd/>
                                            </div>
                                        </label>
                                    </div>
                                    <label>
                                        <p>GUESTS</p>
                                        <div className="position-relative">
                                            <span className="main-icon-left">
                                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.4545 6.54545C13.2545 6.54545 14.7272 5.07273 14.7272 3.27273C14.7272 1.47273 13.2545 0 11.4545 0C9.65447 0 8.18174 1.47273 8.18174 3.27273C8.18174 5.07273 9.65447 6.54545 11.4545 6.54545ZM4.09091 4.90909V2.45454H2.45455V4.90909H0V6.54545H2.45455V9H4.09091V6.54545H6.54545V4.90909H4.09091ZM11.4546 8.18182C9.24549 8.18182 4.90913 9.24546 4.90913 11.4545V13.0909H18V11.4545C18 9.24546 13.6637 8.18182 11.4546 8.18182Z" fill="#333333" fillOpacity="0.5"/>
                                                </svg>
                                            </span>
                                            <select>
                                                <option>3 guests</option>
                                            </select>
                                            <span className="main-icon-right">
                                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.6 0L6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0Z" fill="#333333" fillOpacity="0.5"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </label>
                                    <div style={displayBtn}>
                                        <MainButton btnType="main-button" title="Search"/>
                                    </div>
                                </div>
                                <div className="discover-section">
                                    <h1>Discover a place you’ll love to stay</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <a href="/#">LEARN MORE</a>
                                    <div className="custom-button">
                                        <CustomBtn/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-section">
                    <div className="trending-location">
                        <div className="trending-location-title">
                            <h2>Trending locations for you</h2>
                        </div>
                        <Slider className="slicker" {...settings}>
                            {trendinglocate}
                        </Slider>
                    </div>
                    <div className="trending-location">
                        <div className="trending-location-display">
                            <div className="trending-location-title">
                                <h2>Browse homes/apartments for your next trip</h2>
                                <p>See top destinations people are really talking about</p>
                            </div>
                            <a href="/#">See more destinations</a>
                        </div>
                        <div className="d-flex justify-content-between flex-wrap mb-5">
                            {browse}
                        </div>
                    </div>
                    <div className="trending-location">
                        <div className="trending-location-title">
                            <h2>Worldwide Vacation Destinations</h2>
                        </div>
                        <div className="trending-location-flex">
                            <div className="col-md-6 world-big">
                                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80" alt="" />
                                <div className="world-big-overlay">
                                    <div>
                                        <p>Georgetowns place</p>
                                        <p>New york, USA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 img-small-display">
                                {vacation}
                            </div>
                        </div>
                    </div>
                    <div className="trending-location">
                        <div className="trending-location-title">
                            <h2>Traveler Top Countries and Territories</h2>
                        </div>
                        <div className="top-countries-section">
                            {topCountries}
                        </div>
                    </div>
                </div>
                <div className="map-details">
                    <div className="col-md-6 map-details-content">
                        <MapImage
                            image={locationOne}
                            location={this.state.map[0].location}
                        />
                        <MapImage
                            image={locationTwo}
                            location={this.state.map[0].location}
                        />
                        <MapImage
                            image={locationThree}
                            location={this.state.map[0].location}
                        />
                        <MapImage
                            image={locationFour}
                            location={this.state.map[0].location}
                        />
                        <MapImage
                            image={locationFive}
                            location={this.state.map[0].location}
                        />
                        <MapImage
                            image={locationSix}
                            location={this.state.map[0].location}
                        />
                        <img src={MapDot} alt="Map" />
                    </div>
                    <div className="col-md-6 map-details-detail">
                        <h2>Experience comfort at a maximun frequncy</h2>
                        <p>Pay Less. Enjoy More. Live  Freely</p>
                    </div>
                </div>
                <div className="add-property-section">
                    <div className="add-property-section-overlay">
                        <div className="add-property-details">
                            <p>List your property on letspace.co and open your door to unlimited possibilities</p>
                            <div style={addProperty}>
                                <MainButton btnType="main-button" handleClick={() => window.location.assign('/property')}  title="Add your property"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
