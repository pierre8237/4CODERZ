import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faSearchLocation, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';


import SearchForm from './components/SearchForm';
import WineryList from './components/WineryList';

import './App.css';


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
            <div className="YelpApp">
              
              <SearchForm onFormSubmit = {this.onFormSubmit}/>
              <WineryList 
                searchLocationQuery = {this.state.searchLocationQuery}/> 
             
            </div>
          );
        }
      }
      
    library.add(faUtensils, faSearchLocation, faPhone, faMapMarkerAlt)
      
      export default YelpApp;