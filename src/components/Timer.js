import {React, useState} from "react";

//TODO button to start timer
//TODO button to pause
//TODO button to reset

function Timer() {
    let [minutes, setMinutes] = useState(25);
    let [seconds, setSeconds] = useState(10);

    const startTimer = () => {
        const timerInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds => seconds - 1)
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timerInterval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes => minutes - 1);
                }
            }
        }, 1000);
    };

    return (
        <div>
            <h2>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
            <button onClick={startTimer}>Start</button>
            <button>Pause</button>
            <button>Reset</button>
        </div>
    )
}

export default Timer;