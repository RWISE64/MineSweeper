import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './controls.css';


function Input(props) {
    return (
        <div className={'controls-input'}>
            <label>{props.label}: </label>
            <input 
                type="number"
                id={props.name}
                name={props.name}
                min={props.min}
                max={props.max}
                value={props.value}
                onChange={props.handleInputChange}
            />
        </div>
    );
}

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClosed: true
        };
    }

    toggleTab() {
        console.log("yup");
        this.setState({
            isClosed: !this.state.isClosed
        });
    }

    render() {
        return (
            <div className={"controls" + ((this.state.isClosed) ? " controls-closed" : "")}>
                <div className={"container sub-container controls-inputs"}>
                    <Input 
                        label={'Height'}
                    />
                    <Input 
                        label={'Width'}
                    />
                    <Input 
                        label={'Mines'}
                    />
                    <button>
                        Apply
                    </button>
                </div>
                <div 
                    className={"container sub-container controls-tab"}
                    onClick={() => this.toggleTab()}>
                    <FontAwesomeIcon icon="sliders-h" />
                </div>
            </div>
        );
    }
}

export default Controls;