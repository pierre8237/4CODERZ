import React from "react";
// import { Card, CardTitle, Card } from "reactstrap";
import "../styles/WineCard.css";
// import Louis from "./Images/wineImages/louis.jpg";
function WineCard(props) {
  console.log(props);
  return (
    <div className="card mb-1" style={{ maxWidth: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          {/* <img src={Louis} className="card-img" alt="..." /> */}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Featured Wine</h5>
            <div className="table-responsive-sm">
              <table className="table table-borderless ">
                {/* Wrap this table within the map {} map the data that your passing back ex:if there brandname */}
                <tbody>
                  <tr>
                    <th scope="row">Brand Name:</th>

                    <td>Wino</td>
                  </tr>
                  <tr>
                    <th scope="row">Cheese Pairing:</th>

                    <td>Cheddar</td>
                  </tr>
                  <tr>
                    <th scope="row">Drinking Temperature:</th>
                    <td>34</td>
                  </tr>
                  <tr>
                    <th scope="row">From:</th>

                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">Grape:</th>

                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">Price Point:</th>

                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">Region:</th>

                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">Soil:</th>

                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">Vintage:</th>

                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineCard;
