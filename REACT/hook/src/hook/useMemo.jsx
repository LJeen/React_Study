import React, { useMemo } from "react";

function Counter3(props){
    const memorizedValue = useMemo(
        ()=>{
            return computeExpensiveValue(a,b);
        },
        //[의존성 변수a, 의존성 변수b]
    )
}