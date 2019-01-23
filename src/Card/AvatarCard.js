import React from "react";
import "./AvatarCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const AvatarCard = props => {
  return (
    <div className="card">
      <div className="icon">
        <FontAwesomeIcon icon={faChartLine} />
      </div>

      <div className="text">
        <h4> {props.label}</h4>
        <p> {props.value}</p>
      </div>
      <div className="avatar">
        <img alt="Avatar" src={require("./img_avatar.png")} />
      </div>
    </div>
  );
};

export default AvatarCard;
