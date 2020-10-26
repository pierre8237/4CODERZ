import React, { Component } from 'react';

import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import RestaurantList from '../components/RestaurantList';

import '../styles/Yelp.css';


class Yelp extends Component {
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
      
      <div className="Yelp">
        {/* <Container
          title = 'Wineries'
          tagline = 'Visit a winery in your area.'
        /> */}
       
        <SearchForm onFormSubmit = {this.onFormSubmit}/>

        <RestaurantList searchLocationQuery = {this.state.searchLocationQuery}/> 
        
      </div>
      
    );
  }
}


export default Yelp;