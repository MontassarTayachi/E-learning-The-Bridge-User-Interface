import React from "react";
import "../Styles/Cour.css"

function Cour({ image, name, price}) {
 
  return (
    <div className="menuItem">
       <div style={{ backgroundImage: image ? `url(http://localhost:4000/images/${encodeURIComponent(image)}` : 'none' }} className="img"></div>
       <h1> {name} </h1>
      <div>
        <p>Price:{price} DT/ Month</p>
      </div>
    </div>
  );
}

export default Cour;
