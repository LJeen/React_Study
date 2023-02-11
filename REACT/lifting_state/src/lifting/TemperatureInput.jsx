import React from "react";
import { useState } from "react";

const scaleNames ={
    c: '섭씨',
    f: '화씨'
};

function TemperatureInput(props){
    // const [temperature , setTemperature] = useState('');

    const handleChange = (event) => {
        //setTemperature(event.target.value);
        props.onTemperatureChange(event.target.value);
    };


    return (
        <filedset>
            <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]}):</legend>
            <input
                value ={props.temperature}
                onChange={handleChange}/>
        </filedset>
    )
}

export default TemperatureInput;