import React from 'react';
import RobotController from '../NonRendered/RobotController';
import Planet from '../NonRendered/Planet';

class ResponseForm extends React.Component {

    constructor(props){
        super(props);

        this.state = { positions: 'Awaiting command...'};

    }

    componentDidUpdate(){
        console.log("updating");
        const dims = this.props.planetDimensions.split(' ');
        const planetWidth = parseInt(dims[0]);
        const planetHeight = parseInt(dims[1]);
        if (planetWidth > 0 && planetHeight > 0){
            const planet = new Planet(planetWidth,planetHeight);
            const robotController = new RobotController(planet);
            if (this.props.command.length > 0 && this.state.command !== this.props.command){
                this.setState({command: this.props.command});
                robotController.releaseRobots(this.props.command);
                const positions = robotController.locateRobots();
                if (this.state.positions !== positions){
                    this.setState({positions: positions});
                }
            }
        }
        else{
            const error = "INVALID PLANET DIMENSIONS";
            if (this.state.positions !== error){
                this.setState({positions: error});
            }
        }
            
            
        
        //console.log(this.props.command);
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="ui field">
                        <label>Robot Positions</label>
                        <textarea id="robotPositions" type="text" value={this.state.positions} onChange={(e) => e.preventDefault()}/>
                    </div>
                </form>
            </div>
        );
    };
}

export default ResponseForm;