import React from "react";
import "../styles/Section.css";
import { VectorMap } from "react-jvectormap";
import wine1 from "./Images/wine1.jpg"


const mapData = {
  US: 90,
  FR: 40,
  IT: 80,
  ES: 70,
  AU: 60,
  CL: 50
  
  

};

const styles = {
  sectionStyles: {
    background: "#ffd867"
  }
};

const handleClick = (e, countryCode) => {
  console.log(countryCode);
};


function Section() {

  const { getCode, getName, getData } = require("country-list");
console.log(getName('IS'));  // Iceland
console.log(getCode('Iceland')); // IS
console.log(getData());  //gets an array of all countries names & codes: [{code: "AU", name: "Australia"}]
  return (
  
<div>
<section style={styles.sectionStyles} className="section">
      <h2>Mission Statement.</h2>
      <p> Our mission is to remove the mystery from cheese and wine pairings. We want to give you the power to recreate an exceptional cheese, charcuterie & wine pairing experience at your home. We also want to arm you with the advanced knowledge and theory behind why pairings work well, and the ability to share your learnings with the foodie friends & family in your life. We’re dedicated to making it easy to learn about the topic of cheese and wine pairings and acquired every product we feature in order to recreate at home. </p>
      <p>
         </p>
      <p>
      
      </p>
    </section>

    <section>
    <div class="row">
  <div class="column">
  <img src={wine1} alt="Wine and Chease" />
  </div>
  <div class="column">
  <img src={wine1} alt="Wine and Chease"   />
  </div>
  <div class="column">
  <img src={wine1} alt="Wine and Chease"  />
  </div>
  <div class="column">
  <img src={wine1} alt="Wine and Chease"   />
  </div>
</div>
</section>

 <section style={styles.sectionStyles} className="section" >
      <h2>Major Wine producing countries.</h2>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css" type="text/css" media="screen"/>
 </section>
    
<VectorMap
  map={"world_mill"}
  backgroundColor="transparent" //change it to ocean blue: #0077be
  zoomOnScroll={false}
  containerStyle={{
    width: "100%",
    height: "520px"
  }}
  onRegionClick={handleClick} //gets the country code
  containerClassName="map"
  regionStyle={{
    initial: {
      fill: "#e4e4e4",
      "fill-opacity": 0.9,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 0
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: "pointer"
    },
    selected: {
      fill: "#2938bc" //color for the clicked country
    },
    selectedHover: {}
  }}
  regionsSelectable={true}
  series={{
    regions: [
      {
        values: mapData, //this is your data
        scale: ["#146804", "#ff0000"], //your color game's here
        normalizeFunction: "polynomial"
      }
    ]
  }}
/>
</div>
  
  );
}

export default Section;
