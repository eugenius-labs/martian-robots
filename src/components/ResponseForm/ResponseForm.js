import React from 'react';

class ResponseForm extends React.Component {

    constructor(props){
        super(props);

        this.state = { positions: 'Awaiting command...'};

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