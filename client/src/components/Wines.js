import React from "react";
import wine1 from "./Images/wine1.jpg"



function Wines() {
    return (

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
);
}

export default Wines;