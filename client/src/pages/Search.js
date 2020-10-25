import React from "react";

import Header from "../components/Header";
import HeaderInfo from "../components/HeaderInfo";
import Container from "../components/Container";
import Footer from "../components/Footer";

import WeatherInfo from "../components/WeatherInfo";
import DateInfo from "../components/Date";

import App from "../Yelp/YelpApp";
import YelpApp from "../Yelp/YelpApp";
import RestaurantList from "../components/RestaurantList";
// import SearchForm from "../components/SearchForm";


function Search() {

    return (
    <div>
    <Header />

    <Container>
    <h1>Winery Search</h1>
    <DateInfo />
    <WeatherInfo />
    </Container>

    <YelpApp />
    <Footer />
  </div>
);

}

export default Search;