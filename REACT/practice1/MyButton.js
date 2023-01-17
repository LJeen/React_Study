function MyButton(props){
    const [isClicked, setIsCliked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsCliked(true) } ,
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);