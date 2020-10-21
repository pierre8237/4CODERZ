import React from "react";
import "../styles/WineCard.css";
import Louis from "./Images/wineImages/louis.jpg";
function WineCard(props) {
  console.log(props);
  return (
    <div className="card mb-1" style={{ maxWidth: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={Louis} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Featured Wine</h5>
            <div className="table-responsive-sm">
              <table class="table table-borderless ">
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td>From:</td>
                    <td>France</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>BrandName:</td>
                    <td>Domaine Louis Boillot Les Cherbaudes</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>Vintage:</td>
                    <td>2011</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>Region:</td>
                    <td>Gevery-Chambertain, Cotes-de-Nuits, Burgundy</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>Soil:</td>
                    <td>Limestone, Clay, Sand</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>Grape:</td>
                    <td>Pinot Noir</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>Drinking Temperature:</td>
                    <td>51 - 61 F</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>Price Point:</td>
                    <td>Total Wine Norwalk, CT $120</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>Cheese Pairing:</td>
                    <td>Mild Goat Cheese</td>
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
