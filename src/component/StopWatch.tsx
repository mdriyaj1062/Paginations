import React, { useRef, useState } from "react";

function StopWatch(){
    const[time,setTime]=useState<number>(0);
    const timeRef=useRef<NodeJS.Timeout | null >(null);
    const startTimer=()=>{
       timeRef.current =setInterval(()=>{
        setTime(time=>time+1)
       },1000)
    }
    const stopTimer=()=>{
        
    //     clearInterval(timeRef.current);
    //    timeRef.current=null
        if (timeRef.current) {
            clearInterval(timeRef.current);
            timeRef.current = null;
        }
    }
    const resetTimer=()=>{
        stopTimer();
        setTime(0);
    }

    return(
        <div>
            <h3>Timer: {time}</h3>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}
export default StopWatch