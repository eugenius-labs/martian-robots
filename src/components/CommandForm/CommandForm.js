import React from 'react';

class CommandForm extends React.Component {

    state = { command: '', planetDimensions: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.command,this.state.planetDimensions);
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="ui field">
                        <label>Planet Dimensions
                        </label>
                        <input type="text" value={this.state.planetDimensions} onChange={(e) => this.setState({ planetDimensions: e.target.value})}/>
                    </div>
                    <div className="ui field">
                        <label>Command
                        </label>
                        <textarea type="text" value={this.state.command} onChange={(e) => this.setState({ command: e.target.value})}/>
                    </div>
                    <div className="ui field">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        );
    };
}

export default CommandForm;