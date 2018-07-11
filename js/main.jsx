import React from 'react';
import ReactDOM from 'react-dom';


const parameters = {
    color : "red",
    frequency: 50
}


class StrobeLight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "blue"
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                color: this.state.color === "blue" ? this.props.parameters.color : "blue"
            });
        }, this.props.parameters.frequency)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {

        const obj = {
            width: "80vh",
            height: "80vh",
            marginTop: "8vh",
            backgroundColor: this.state.color
        };

        return <div style={obj}> </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <StrobeLight parameters={parameters}/>,
        document.getElementById('app')
    );
});




