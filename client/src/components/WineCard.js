// import React, { useState, useEffect } from "react";
// import Louis from "./Images/wineImages/louis2.jpg";

// import Table from "react-bootstrap/Table";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Image from "react-bootstrap/Image";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/WineCard.css";
// import { List, ListItem } from "./List";
// import { wineDb } from "../utils/API";

// function WineCard(props) {
//   console.log(props);
//   let db = wineDb.getPairings().then(res => console.log(res.data));

//   const [wines, setWines] = useState([]);
//   const [formObject, setFormObject] = useState({});

//   useEffect(() => {
//     loadWine();
//   }, []);

//   function loadWine() {
//     const allWines = wineDb.getPairings().then(res => {
//       // db = res.data;
//       const usaWines = res.data.filter(wines => wines.From == "USA");
//       console.log(usaWines);
//       setWines(usaWines);
//     });
//   }

//   wineDb.getPairings();
//   return (
//     <Card mb={1} style={{ width: "auto", maxWidth: "100%" }}>
//       <Row>
//         <Col md={4}>
//           <Image src={Louis} alt="..." fluid />
//         </Col>
//         <Col md={8}>
//           <Card.Body>
//             <Card.Title>Featured Wine</Card.Title>
//             {wines.length ? (
//               <List>
//                 <ListItem>
//                   <strong>{wines[0].From}</strong>
//                 </ListItem>
//                 <ListItem>
//                   <strong>{wines[0].Brand_Name}</strong>
//                 </ListItem>
//                 <ListItem>
//                   <strong>{wines[0].Cheese_Pairing}</strong>
//                 </ListItem>
//                 <ListItem>
//                   <strong>{wines[0].Drinking_Temperature}</strong>
//                 </ListItem>
//                 <ListItem>
//                   <strong>{wines[0].Grape}</strong>
//                 </ListItem>
//                 <ListItem>
//                   <strong>{wines[0].Price_Point}</strong>
//                 </ListItem>
//                 <ListItem>
//                   <strong>{wines[0].Region}</strong>
//                 </ListItem>
//                 <ListItem>
//                   <strong>{wines[0].Soil}</strong>
//                 </ListItem>
//                 <ListItem>
//                   <strong>{wines[0].Vintage}</strong>
//                 </ListItem>
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Card.Body>
//         </Col>
//       </Row>
//     </Card>
//   );
// }

// export default WineCard;
