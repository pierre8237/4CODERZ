import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WineryList extends Component {

    constructor(props) {
        super(props);
          this.state = {
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
         this.setState({ loading: true })

         axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
         headers: {
            //to get the API from the .env file use process.env.{variable name}
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
         params: {
            categories: "Wineries",
        }
        })
        .then((res) => {
            console.log(res.data.businesses)
            this.setState({ results: res.data.businesses, loading: false })
        })
        .catch((err) => {
           this.setState({ errorState: "Sorry try something else?", loading: false })
        })
    }

    renderEmptyState () {
        return (
            <h2 className = "heading-tertiary">Search for some Wineries in your area!</h2>
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
                    
                    <p className = "WineryInfo__para">
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
                    </p>

                    {/* <img
                        src = {require("./Images/yelp_stars/regular/${result.rating}.png")}
                        alt = {"yelp ratings: ${result.rating}/5"}
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