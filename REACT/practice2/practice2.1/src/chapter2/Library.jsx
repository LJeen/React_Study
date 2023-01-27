import React from "react";
import Book from "./book";

function Library(props){
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300}></Book>
            <Book name="처음 만난 AWS" numOfPage={400}></Book>
            <Book name="처음 만난 리액트" numOfPage={500}></Book>
        </div>
    );
}

export default Library; 
// 모듈의 종류는 2가지 
// 1. 복수의 함수가 있는 라이브러리형태의 모듈 
// 2. 개체 하나만 선언되어있는 모듈 
// export default : 해당 모듈엔 개체가 하나만 있는다는 사실을 나타냄