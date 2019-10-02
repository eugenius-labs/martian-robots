import React from 'react';

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
            const positions = "VALID INPUT";
            if (this.props.command.length > 0 && this.state.positions !== positions){
                this.setState({positions: positions});
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