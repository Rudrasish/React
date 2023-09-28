import "./AnswerTimer.scss";
import { useEffect, useState, useRef } from "react";


function AnswerTimer({duration, onTimeUp}){
    
    const [counter, setCounter] = useState(0);
    const [progressLoaded, setProgressLoaded] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCounter((cur) => cur+1);
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    //update the useEffect hook with the loading
    useEffect(() => {
        setProgressLoaded(100 * (counter / duration));
        
        if(counter === duration){
            clearInterval(intervalRef.current);
            setTimeout(() => {
                onTimeUp();
            }, 1000);
        }

    }, [counter]);

    return (
        <div className="answer-timer-container">
            <div
            // for style property first {} is for expression and 2nd {} is for object itself
            style={{
                width: `${progressLoaded}%`,
                backgroundColor: `${
                    progressLoaded < 40
                    ? 'lightgreen' 
                    : progressLoaded < 70
                    ? 'orange'
                    : 'red'
                }`
            }} 
            className="progress"></div>
        </div>
    );
}

export default AnswerTimer;