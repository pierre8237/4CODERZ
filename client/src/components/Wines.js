import React from "react";
import "../styles/Wines.css";

import wine1 from "./Images/mythicus.jpg"
import wine2 from "./Images/cakebread.jpeg"
import wine3 from "./Images/weinbach.jpg"
import wine4 from "./Images/ramey.png"
import wine5 from "./Images/chateau.gif"
import wine6 from "./Images/domaine.jpg"
import wine7 from "./Images/plantea.jpeg"


// const wineStyle = {

// }

function Wines() {
    return (

<div className="wine">

  <div>
  <img src={wine1} alt="Wine and Chease" />
 
  <img src={wine2} alt="Wine and Chease"   />
 
  <img src={wine3} alt="Wine and Chease"  />

  <img src={wine4} alt="Wine and Chease"   />

  <img src={wine5} alt="Wine and Chease"   />

  <img src={wine6} alt="Wine and Chease"   />

  <img src={wine7} alt="Wine and Chease"   />


</div>
</div>

)
}

export default Wines;