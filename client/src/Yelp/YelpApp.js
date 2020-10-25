import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faSearchLocation, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import RestaurantList from '../components/RestaurantList';
// import Footer from './Components/Footer';
import './YelpApp.css';



class YelpApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocationQuery: null
    };
  }

  onFormSubmit = (searchLocationQuery) => {
    this.setState({
      searchLocationQuery: searchLocationQuery
    })
  }

  render() {
    return (
      <div className="App">
        <Container
          title = 'Wineries'
          tagline = 'Visit a winery in your area.'
        />
        <SearchForm onFormSubmit = {this.onFormSubmit}/>
        <RestaurantList 
          searchLocationQuery = {this.state.searchLocationQuery}/> 
        
      </div>
    );
  }
}

// library.add(faUtensils, faSearchLocation, faPhone, faMapMarkerAlt)

export default YelpApp;


// <Footer />