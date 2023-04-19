import {React, useState, useEffect} from "react";

function Timer() {
    const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let countdown = null;

        if (isActive && time > 0) {
        countdown = setInterval(() => {
            setTime(time => time - 1);
        }, 1000);
        } else if (!isActive || time === 0) {
        clearInterval(countdown);
        }

        return () => clearInterval(countdown);
    }, [isActive, time]);


    const startTimer = () => {
        setIsActive(true);
    };
    
    const handlePause = () => {
        setIsActive(false);
    };
    
    const handleReset = () => {
        setIsActive(false);
        setTime(25 * 60);
    };
    
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;

    return (
        <div>
            <h2>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Timer;