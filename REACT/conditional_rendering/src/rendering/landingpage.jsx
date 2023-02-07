import React from "react";
import { useState } from "react";
import Toolbar from "./Toolbar";

function Landingpage(props){
    const [isLoggedIn, setIsLogedIn] = useState(false);

    const onClickLogin = () => {
        setIsLogedIn(true);
    };

    const onCLickLogout = () => {
        setIsLogedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onCLickLogout={onCLickLogout}
            />
            <div style={{padding : 16}}>리액트 공부!</div>

            
        </div>
    );
}

export default Landingpage;