import React from "react";
import ReactDOM from 'react-dom/client';

function Welcome(props){
    return <h1>안녕,{props.name}</h1>
}

class Welcome2 extends React.Component{
    render() {
        return <h1>안녕,{this.props.name}</h1>
    }
}

// const element = <Welcome name="이진규" />;
// ReactDOM.render(
//     element,document.getElementById('root')
// );

function App2(props){
    return(
        <div>
            <Welcome name="Mike"/>
            <Welcome name="Steve"/>
            <Welcome name="Jane"/>
        </div>
    )
}

// ReactDOM.render(
//     <App2 />,
//     document.getElementById('root')
// );

export default App2;