import React from "react";

function Createlist({users})
{
    if (users.length === 0) return null;
    return(
        <>
            <p>Details of the members of the Optica Team 2024</p>
            <ul className="mainlist">
            {users.map((user,index)=>{
                if(user.name && user.designation)
                {
                return(
                <li key={index}>
                    <ul className="innerlist">
                        <li>Name : {user.name}</li>
                        <li>Designation : {user.designation}</li>
                    </ul>
                </li>)
                }
            })}
            </ul>
            <hr />
        </>
        )
}

export default Createlist;