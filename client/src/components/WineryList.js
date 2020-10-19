import React, { Component } from 'react';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WineryList extends Component {

    constructor(props) {
        super(props);
        //props.state is linked with the result sending back from its child a.k.a the result we returned in SearchForm element
        this.state = {
        //leverage the state to store the information return from API to make loading faster
        results: [],
        errorState: null,
        loading: false,
        };
    }
    
    componentDidMount () {
        this.getWineriesFromApi("");
    }

    componentDidUpdate (prevProps, prevState) {
        if(this.props.searchLocationQuery !== prevProps.searchLocationQuery) {
            this.setState({
                results: [], 
            }, () => this.getWineriesFromApi(this.props.searchLocationQuery))
        }
    }
    //function to get information from API 
    getWineriesFromApi = (locationSearched) => {
        //UI feedback to tell the user when we are retrieving infromation from the API 
        this.setState({ loading: true })

        //using a proxy server cors-anywhere to get rid of the CROS probblem 
        //SUPER HOT TIP: passing the location variable, which equals to the user's input (see below). Instead of grabbbing the entire API, it will only retrieve the restaurants that are closed to the lcoation information we entered. This makes the lodading wayyyyyyy faster.
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
        //required authorization format from API 
        headers: {
            //to get the API from the .env file use process.env.{variable name}
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        //option params passed to API call to retrieve only breakfast and lunch spots 
        params: {
            categories: "Wineries",
        }
        })
        .then((res) => {
            console.log(res.data.businesses)
            //change the state of App to reflect on the result we are given from the API
            //at the same time, setting the loading state to false 
            this.setState({ results: res.data.businesses, loading: false })
        })
        .catch((err) => {
            //fire the errorState message if there is no information return from the API
            this.setState({ errorState: "Sorry we coudln't find information related to the location you search, do you want to try something else?", loading: false })
        })
    }

    renderEmptyState () {
        return (
            <h2 className = "heading-tertiary">Hang tight! We are working on getting you the list of Wineries in your Area!</h2>
        )
    }

    renderRestaurantInfo () {
        
        const WineryList = this.state.results.map((result) => {
            
            return (    
                <div 
                    className = "WineryInfo"
                    key = {result.id}
                >
                    <img src = {result.image_url} alt = "" className = "WineryInfo__img" />
                    <h2 className = "heading-tertiary WineryInfo__name">{result.name}</h2>
                    
                    {/* <p className = "WineryInfo__para">
                        <FontAwesomeIcon 
                        icon = "map-marker-alt" 
                        className = "WineryInfo__icon"
                        aria-label = "address:" />
                        {result.location.display_address[0]}, {result.location.display_address[1]}
                    </p>
                    
                    <p className = "WineryInfo__para">
                        <FontAwesomeIcon 
                        icon = "phone" 
                        className = "WineryInfo__icon"
                        aria-label = "phone number:" />
                        {result.phone}
                    </p> */}

                    {/* <img 
                        src = {require(`../assets/yelp_stars/regular/${result.rating}.png`)}
                        alt = {`yelp ratings: ${result.rating}/5`}
                        className = "WineryInfo__rating"/>

                    <p className = "WineryInfo__reviewCount"> Based on {result.review_count} Reviews</p>
                */}
                    <a 
                        href= {result.url} 
                        className = "WineryInfo__website">
                            More infomration on Yelp
                    </a>

                    <img 
                        src = {require('./Images/Yelp_trademark_RGB.png')} alt = "yelp"
                        className = "WineryInfo__yelp"/>
                </div>  
            );
        });

        return(
            <div className="WineryList__gallery">{WineryList}</div>
        )
    }

    render() {
        return (
            
            <section className="WineryList">
                {this.state.results.length ? this.renderWineryInfo() : this.renderEmptyState()}

                {/*conditional rendering for error state - when this.state.errorState is not true*/}
                {!!this.state.errorState &&
                    <h1>{this.state.error}</h1>
                }   
            </section>
        )}

}
export default WineryList