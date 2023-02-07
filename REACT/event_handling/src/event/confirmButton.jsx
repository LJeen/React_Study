import React from "react";

class confirmButton extends React.Component{
    constructor(props){
        super(props);

        this.state={
            isConfrimed : false,
        };

        this.handleConfrim = this.handleConfrim.bind(this);
    }

    handleConfrim(){
        this.setState((prevState) => ({
            isConfrimed : !prevState.isConfrimed,
        }));
    }

    render(){
        return (
            <button
                onClick={this.handleConfrim}
                disabled={this.state.isConfrimed}
            >
                {this.state.isConfrimed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default confirmButton;