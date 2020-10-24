import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import YelpApp from "./Yelp/YelpApp";
import * as serviceWorker from './registerServiceWorker';
// import registerServiceWorker from "./registerServiceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();

ReactDOM.render(<YelpApp />, document.getElementById('root'));
serviceWorker.unregister();