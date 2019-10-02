import React from 'react';
import './App.css';
import CommandForm from './CommandForm/CommandForm';
class App extends React.Component {

    state = { command: '', planetDimensions: '' };

    onCommanderSubmit = (command,planetDimensions) => {

        this.setState({ command: command, planetDimensions: planetDimensions});
    }

    render(){
        return(
            <div className="ui container">
                <h1>Martian Robots</h1>
                <CommandForm onSubmit={this.onCommanderSubmit}/>
                <div>{this.state.planetDimensions}</div>
                <div>{this.state.command}</div>
            </div>
        );
    };
}

export default App;