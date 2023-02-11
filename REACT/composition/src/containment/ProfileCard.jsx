import React from "react";
import Card from "./Card";

function ProfileCard(props){
    return(
        <Card title="Title" backgroundColor="#4ea04e">
            <p>안녕하세요</p>
            <p>리액트 공부 중</p>
        </Card>
    );
}

export default ProfileCard;