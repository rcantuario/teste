import React from "react";
import "./LabelCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const LabelCard = props => {
  return (
    <div className="labelCard">
      <div className="icon">
        <FontAwesomeIcon icon={faSquare} />
      </div>

      <div className="text">{props.label}</div>
    </div>
  );
};

export default LabelCard;
