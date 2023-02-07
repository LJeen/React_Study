import React from "react";

class Toggle extends React.Component{
    constructor(props){
        super(props);

        this.state={isToggleOn:true};

        //callback에서 'this'를 사용하기 위해서는 바인딩을 필수적으로 해줘야함
        this.handleClick = this.handleClick.bind(this);
        //bind를 하는 이유는 기본적으로 클래스 함수들이 바운드 되지 않기때문
        //bind하지 않으면 글로벌 스코프에서 호출되는데 undefined상태이므로 사용불가
        //함수의 이름 뒤에 괄호 없이 사용하려면 해당 함수를 bind해줘야함
    }

    handleClick(){
        this.setState(prevState=> ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    // handleClick=()=>{
    //     this.setState(prevState=> ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
            </button>
        );
    }
}

export default Toggle;