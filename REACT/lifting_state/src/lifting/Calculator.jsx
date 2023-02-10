import React from "react";
import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

function Calculator (props){
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }
}