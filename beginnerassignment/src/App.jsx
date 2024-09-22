import React from "react";
import Forms from "./components/FormComponent.jsx";
import Events from "./components/Events.jsx";
export default function App() {

    return (
        <>
            <div>
                <div style={{position: "relative"}}>
                <h1 style={{ fontFamily: "futur", textAlign: "center", fontSize:"100px", margin: "0 auto" }}>OPTICA</h1>
                </div>
                
                <Forms />
                <h1 className="text-8xl mt-5" style={{ fontFamily: "futura", textAlign: "center"}}>EVENTS</h1>
                <Events />
            </div>
        </>
    );
}
