import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/restaurantList.css";

class RestaurantList extends Component {
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

  componentDidMount() {
    this.getRestaurantsFromApi("");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.searchLocationQuery !== prevProps.searchLocationQuery) {
      this.setState(
        {
          results: [],
        },
        () => this.getRestaurantsFromApi(this.props.searchLocationQuery)
      );
    }
  }
  //function to get information from API
  getRestaurantsFromApi = locationSearched => {
    //UI feedback to tell the user when we are retrieving infromation from the API
    this.setState({ loading: true });

    //using a proxy server cors-anywhere to get rid of the CROS probblem
    //SUPER HOT TIP: passing the location variable, which equals to the user's input (see below). Instead of grabbbing the entire API, it will only retrieve the restaurants that are closed to the lcoation information we entered. This makes the lodading wayyyyyyy faster.
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`,
        {
          //required authorization format from API
          headers: {
            //to get the API from the .env file use process.env.{variable name}
            Authorization: `Bearer TTpzJm4nDIgWbV6QQu14vQPrU4PyC4h8E1uCmLY_wzooKNlG6_ECu-zCi0u2I4DiqGm7Xesam7hpevmIugQtlDtjjk8oaR_WvZT82TOWPA-_mtB5bTqQTMqIMyKWX3Yx`,
          },

          //option params passed to API call to retrieve
          params: {
            categories: "wineries",
          },
        }
      )
      .then(res => {
        console.log(res.data.businesses);

        this.setState({ results: res.data.businesses });
      })

      .catch(err => {
        //fire the errorState message if there is no information return from the API
        this.setState({
          errorState: `Sorry we coudln't find information related to the location you search, do you want to try something else?`,
          loading: false,
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.results.map(result => {
          console.log(this.state.results);
          return (
            <CardGroup>
              <Card
                className="card-group"
                // border="primary"
                style={{
                  width: "11.7rem",
                  display: "inline-flex",
                }}
              >
                <Card.Img
                  id="RestuarantList"
                  style={{ width: "11rem" }}
                  variant="top"
                  src="holder.js/200px200"
                  src={result.image_url}
                />
                <Card.Body>
                  <Card.Title>{result.name}</Card.Title>
                  <Card.Text>{result.display_phone}</Card.Text>

                  <Card.Text>
                    {result.location.display_address[0]}
                    <br />
                    {result.location.display_address[1]}
                  </Card.Text>
                  <Button href={result.url} variant="primary">
                    More info on Yelp
                  </Button>
                </Card.Body>
              </Card>
            </CardGroup>
          );
        })}
      </div>
    );
  }
}
export default RestaurantList;

// <div
//     className = "RestaurantInfo"
//     key = {result.index}
// >
//     <img src = {result.image_url} alt = "" className = "RestaurantInfo__img" />
//     <h2 className = "heading-tertiary RestaurantInfo__name">{result.name}</h2>

//     <p className = "RestaurantInfo__para">
//         {result.location.display_address[0]}, {result.location.display_address[1]}
//     </p>

//     <p className = "RestaurantInfo__para">
//         {result.phone}
//     </p>

/* <img 
                        src = {require(`../assets/yelp_stars/regular/${result.rating}.png`)}
                        alt = {`yelp ratings: ${result.rating}/5`}
                        className = "RestaurantInfo__rating"/>

                    <p className = "RestaurantInfo__reviewCount"> Based on {result.review_count} Reviews</p> */

// <a href= {result.url}
//     className = "RestaurantInfo__website">
//         More infomration on Yelp
// </a>

/* <img src = {require('../assets/YelpLogo_Trademark/Screen(R)/Yelp_trademark_RGB.png')} alt = "yelp"
                        className = "RestaurantInfo__yelp"/> */
// </div>
// );
// });

// return(
//     <div className="RestuarantList__gallery">{RestaruantList}</div>
// )
// }

// render() {
//     return (

//         <section className="RestuarantList">
//             {this.state.results}

/* {this.state.results.length ? this.renderRestaurantInfo() : this.renderEmptyState()} */

/*                 
                 {!!this.state.errorState &&
                    <h1>{this.state.error}</h1>
                }    */
//     </section>
// )}
