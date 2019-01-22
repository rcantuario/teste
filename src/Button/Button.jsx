import React from "react";
import "./Button.css"

const Button = (props) =>{
   return (
    <div>
        <button  className="btn" onClick={()=>{console.log('click')}}>{props.text}</button>
    </div>   
   );
}

export default Button;