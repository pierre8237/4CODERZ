import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import WeatherInfo from "../components/WeatherInfo";
import DateInfo from "../components/Date";
import Yelp from "../components/Yelp";

function Search() {
  return (
    <div>
      <Header />
      <Container>
        <h1>Winery Search</h1>
        <DateInfo />
        <WeatherInfo />
      </Container>
      <Yelp />
      <Footer />
    </div>
  );
}

export default Search;
