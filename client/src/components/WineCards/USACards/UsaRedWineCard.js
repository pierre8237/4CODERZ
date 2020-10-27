import React, { useState, useEffect } from "react";
import Mythicus from "../../Images/wineImages/mythicus2.jpg";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Row } from "./Grid";
import { List, ListItem } from "../../List";
import { wineDb } from "../../../utils/API";
//getUsaRed

function UsaRed(props) {
  const [wines, setWines] = useState([]);
  // const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadWine();
  }, []);

  function loadWine() {
    const allWines = wineDb.getPairings().then(res => {
      const usaRed = res.data.filter(wines => wines.From == "USA");

      setWines(usaRed);
    });
  }

  wineDb.getPairings();
  return (
    <Card mb={1} style={{ width: "auto", maxWidth: "100%" }}>
      <Row>
        <Col md={4}>
          <Image src={Mythicus} alt="..." fluid />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>Featured Wine</Card.Title>
            {wines.length ? (
              <List>
                <ListItem>
                  <strong>{wines[0].From}</strong>
                </ListItem>
                <ListItem>
                  <strong>{wines[0].Brand_Name}</strong>
                </ListItem>
                <ListItem>
                  <strong>{wines[0].Cheese_Pairing}</strong>
                </ListItem>
                <ListItem>
                  <strong>{wines[0].Drinking_Temperature}</strong>
                </ListItem>
                <ListItem>
                  <strong>{wines[0].Grape}</strong>
                </ListItem>
                <ListItem>
                  <strong>{wines[0].Price_Point}</strong>
                </ListItem>
                <ListItem>
                  <strong>{wines[0].Region}</strong>
                </ListItem>
                <ListItem>
                  <strong>{wines[0].Soil}</strong>
                </ListItem>
                <ListItem>
                  <strong>{wines[0].Vintage}</strong>
                </ListItem>
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
export default UsaRed;
