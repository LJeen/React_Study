import React from "react";

const numbers = [1,2,3,4,5]; //배열선언
//key는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미

const doubled = numbers.map((number) => number * 2);

function Listnubmer(props){

    const numbers = [1,2,3,4,5]; //배열선언
    //key는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미

    const doubled = numbers.map((number) => 
        <li key={number.toString()}>{number}</li>
    );

    return (
        <ul>{doubled}</ul>
    );
}

export default Listnubmer;