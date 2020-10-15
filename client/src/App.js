import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Header from "./components/Header";
// import Map from "./components/Map";
import Nav from "./components/Navbar";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

import Home from "./pages/Home";
import France from "./pages/France";
import Italy from "./pages/Italy";
import Spain from "./pages/Spain";
import Usa from "./pages/Usa";


function App() {
  
  return (
   
    <Router>

  <div>
  <Nav />
 
      <Switch>
        <Route exact path={["/", "/home"]}><Home /></Route>
        <Route exact path="/france"><France /></Route>
        <Route exact path="/italy"><Italy /></Route>
        <Route exact path="/spain"><Spain /></Route>
        <Route exact path="/usa"><Usa /></Route>

      </Switch>
      </div>
      </Router>
 
   
  );
}


export default App;