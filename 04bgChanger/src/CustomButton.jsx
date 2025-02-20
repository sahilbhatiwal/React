import React from "react";
import setColor from "./App"
import App from "./App";
function Button(props){
    return(
        <>
        <button className=' text-black px-10 m-10  rounded-3xl' style={{backgroundColor: props.color}} onClick={() => props.setColor(props.color)}> {props.color}</button>
        </>
    )
}

export default Button;