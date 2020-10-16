import axios from "axios";



export default {
  getWineries: function() {
    return axios.get("https://api.yelp.com/v3/businesses/search");
  },

};

axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
},
  params: {
  categories: 'breakfast_brunch',
}
})
.then((res) => {
console.log(res)
})
.catch((err) => {
console.log ('error')
})