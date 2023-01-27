import React from "react";
import ReactDOM from 'react-dom';

function Tick(){
    const element = (
        <div id='root'>
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
        </div>
    );

    ReactDOM.render(element,document.getElementById('root'))
    //현재 시간을 포함하고 있는 엘리먼트를 생성하여 root div에 랜더링하는 역할
}

export default Tick;

setInterval(Tick, 1000); // 어떠한 함수를 업데이트할때 1000ms = 1초
// setTimeout() : 어떠한 함수를 몇 초 뒤에 실행