import React, { useState, useEffect } from "react";

const SecondsCounter = (props) => {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const num = setInterval(() => {
            setSeconds(s => s + 1);
        }, props.multiplier);
        return () => clearInterval(num);
    });
    
    if (seconds < 10){
        return <h1>{seconds}</h1>;
    }else if (seconds >= 10){
        return <SecondsCounter multiplier={props.multiplier}/>
    }    
}

export default SecondsCounter;
