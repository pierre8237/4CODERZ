import React, { useState, useEffect } from "react";
import Weinbach from "../../Images/wineImages/weinbach2.jpg";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Row } from "./Grid";
import { List, ListItem } from "../../List";
import { wineDb } from "../../../utils/API";

function FranceWhiteb(props) {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    loadWine();
  }, []);

  function loadWine() {
    const allWines = wineDb.getPairings().then(res => {
      const franceWines = res.data.filter(wines => wines.From == "France");
      console.log(franceWines);
      setWines(franceWines);
    });
  }

  wineDb.getPairings();
  return (
    <Card mb={1} style={{ width: "auto", maxWidth: "100%", display: "fluid" }}>
      <Row>
        <Col md={4}>
          <Image src={Weinbach} alt="..." fluid />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>Featured Wine</Card.Title>
            {wines.length ? (
              <List>
                <ListItem>
                  <strong>
                    {"Country : "}
                    {wines[2].From}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Brand Label : "}
                    {wines[2].Brand_Name}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Cheese Pairing : "}
                    {wines[2].Cheese_Pairing}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Drinking Temperature : "}
                    {wines[2].Drinking_Temperature}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Grape : "}
                    {wines[2].Grape}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Price-Point : "}
                    {wines[2].Price_Point}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Region : "}
                    {wines[2].Region}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Soil : "}
                    {wines[2].Soil}
                  </strong>
                </ListItem>
                <ListItem>
                  <strong>
                    {"Vintage : "}
                    {wines[2].Vintage}
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
export default FranceWhiteb;
