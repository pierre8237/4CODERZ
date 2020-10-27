import React from "react";
import "../styles/Map.css";
import { VectorMap } from "react-jvectormap";
import Row from "../components/Row";
import Container from "../components/Container";

const mapData = {
  US: 90,
  FR: 40,
  IT: 80,
  ES: 70,
  AU: 60,
  CL: 50,
};

// const styles = {
//   sectionStyles: {
//     background: "#ffd867"
//   }
// };

const handleClick = (e, countryCode) => {
  console.log(countryCode);
};

function Map() {
  const { getCode, getName, getData } = require("country-list");
  console.log(getName("IS")); // Iceland
  console.log(getCode("Iceland")); // IS
  console.log(getData()); //gets an array of all countries names & codes: [{code: "AU", name: "Australia"}]
  return (
    <Container>
      <section className="section">
        <Row />
        <h2 id="map1">Major Wine producing countries.</h2>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css"
          type="text/css"
          media="screen"
        />
      </section>

      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" //change it to ocean blue: #0077be
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "800px",
        }}
        onRegionClick={handleClick} //gets the country code
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0,
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer",
          },
          selected: {
            fill: "#2938bc", //color for the clicked country
          },
          selectedHover: {},
        }}
        regionsSelectable={true}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ["#146804", "#ff0000"], //your color game's here
              normalizeFunction: "polynomial",
            },
          ],
        }}
      />
    </Container>
  );
}

export default Map;
