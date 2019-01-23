import React from "react";
import "./AvatarCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const AvatarCard = props => {
  return (
    <div className="card">
      <div className="text">
        <span> {props.label} </span>
        <span> {props.value}</span>
      </div>
      <div className="avatar">
        <img alt="Avatar" src={require("./img_avatar.png")} />
      </div>
    </div>
  );
};

export default AvatarCard;
