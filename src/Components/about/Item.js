import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flip from "react-reveal/Flip";

const Item = ({ icon, title, desc }) => (
  <Flip left>
    <div className="item">
      <div className="icon">
        <FontAwesomeIcon icon={icon} size="6x" color="#ff4f40" />
      </div>
      <div className="desc">
        <h4 className="title-md">{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  </Flip>
);

export default Item;
