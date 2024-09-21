import React from "react";

function JSCOP(props)
{
    return(
        <>
        <img className="image" src={props.src} alt="" />
        <div className="text">
            <h1>{props.name}</h1>
            <p>{props.info}</p>
        </div>
        <hr />
        </>
   )
}

export default JSCOP;