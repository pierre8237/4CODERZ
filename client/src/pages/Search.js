import React from "react";

import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";

import YelpApp from "../Yelp/YelpApp";
import WineryList from "../components/WineryList";
import SearchForm from "../components/SearchForm";


function Search() {

    return (
    <div>
    <Header />
    {/* <Jumbotron />   */}
    <h1>Winery Search</h1>
    
    <YelpApp />
   
    <Footer />
  </div>
);

}

export default Search;