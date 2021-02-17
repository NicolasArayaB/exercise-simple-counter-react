import React, { useState, useEffect } from "react";

const SecondsCounter = (props) => {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const num = setInterval(() => {
            setSeconds(s => s + 1);
        }, props.multiplier);
        return () => clearInterval(num);
    });

    return seconds < 10 ? <h1>{seconds}</h1> : setSeconds(0)
}

export default SecondsCounter;
