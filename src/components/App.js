import React from 'react';
import './App.css';
import CommandForm from './CommandForm/CommandForm';
import ResponseForm from './ResponseForm/ResponseForm';
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
                <ResponseForm command={this.state.command} planetDimensions={this.state.planetDimensions}/>
            </div>
        );
    };
}

export default App;