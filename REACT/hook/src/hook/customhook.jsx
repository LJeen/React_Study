import React, {useState} from "react";

function useCounter(InitailValue){
    const[count, setCount] = useState(InitailValue);

    const increaseCount = ()=> setCount((count)=>count +1);
    const decreaseCount = ()=> setCount((count)=>Math.max(count-1,0)) // Math.max() : 더 큰 인자를 리턴

    return [count,increaseCount,decreaseCount];
}

export default useCounter;