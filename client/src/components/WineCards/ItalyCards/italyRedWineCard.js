import React, { useState, useEffect } from "react";
import Zingari from "../../Images/wineImages/petra-zingari-toscana2.jpg";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

import { List, ListItem } from "../../List";
import { wineDb } from "../../../utils/API";

function ItalyRed(props) {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    loadWine();
  }, []);

  function loadWine() {
    const allWines = wineDb.getPairings().then(res => {
      const ItalyWines = res.data.filter(wines => wines.From == "Italy");
      setWines(ItalyWines);
      console.log(ItalyWines);
    });
  }

  wineDb.getPairings();
  return (
    <Card mb={1} style={{ width: "auto", maxWidth: "100%", display: "fluid" }}>
      <Row>
        <Col md={4} className="m-auto">
          <Image
            src={Zingari}
            alt="..."
            className="d-block m-auto img-fluid w-50"
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>Featured Wine</Card.Title>
            {wines.length ? (
              <List>
                <ListItem>
                  <strong>
                    {"Country : "}
                    {wines[0].From}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Brand Label : "}
                    {wines[0].Brand_Name}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Cheese Pairing : "}
                    {wines[0].Cheese_Pairing}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Drinking Temperature : "}
                    {wines[0].Drinking_Temperature}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Grape : "}
                    {wines[0].Grape}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Price-Point : "}
                    {wines[0].Price_Point}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Region : "}
                    {wines[0].Region}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Soil : "}
                    {wines[0].Soil}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Vintage : "}
                    {wines[0].Vintage}
                  </strong>
                </ListItem>
              </List>
            ) : (
              <h3>Loading...</h3>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
export default ItalyRed;
