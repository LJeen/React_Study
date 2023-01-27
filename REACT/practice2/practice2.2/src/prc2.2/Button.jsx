import React from "react";

function Button(props){
    return (
        <button class={'bg-${props.color}'}>
            <b>
                {props.children}
            </b>
        </button>
    )
}

function ConfirmDialog(props){
    return (
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            <Button color='green'>확인</Button>
        </div>
    )
}

export {ConfirmDialog};
export {Button};
// 모듈의 종류는 2가지 
// 1. 복수의 함수가 있는 라이브러리형태의 모듈 
// 2. 개체 하나만 선언되어있는 모듈 
// export default : 해당 모듈엔 개체가 하나만 있는다는 사실을 나타냄