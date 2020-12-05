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
            isClosed: true,
            height: props.height,
            width: props.width,
            mineCount: props.mineCount
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toggleTab() {
        this.setState({
            isClosed: !this.state.isClosed
        });
    }

    handleInputChange(e) {
        const target = e.target;
        const value = parseInt(target.value);
        this.setState({
            [target.name]: value
        });
        // Update mineCount to be within semi-rational bounds
        // min = just 1 square, max = 20% of all squares
        if (e.target === 'height' || e.target === 'width') {
            const squareCount = (e.target === 'height') ? value * this.state.width : this.state.height * value;
            const minMines = 1;
            const maxMines = Math.floor(squareCount * .2);
            const mines = Math.max(Math.min(this.state.mineCount, maxMines), minMines);
            this.setState({

            });
        }
    }

    render() {
        const squareCount = this.state.height * this.state.width;
        const minMines = 1;
        const maxMines = Math.floor(squareCount * .2);
        return (
            <div className={"controls" + ((this.state.isClosed) ? " controls-closed" : "")}>
                <div className={"container sub-container controls-inputs"}>
                    <Input 
                        label={'Height'}
                        name={'height'}
                        value={this.state.height}
                        min={5}
                        max={20}
                        handleInputChange={this.handleInputChange}
                    />
                    <Input 
                        label={'Width'}
                        name={'width'}
                        value={this.state.width}
                        min={5}
                        max={20}
                        handleInputChange={this.handleInputChange}
                    />
                    <Input 
                        label={'Mines'}
                        name={'mineCount'}
                        value={this.state.mineCount}
                        min={1}
                        max={maxMines}
                        handleInputChange={this.handleInputChange}
                    />
                    <button
                        onClick={() => this.props.handleSubmit(this.state.height, this.state.width, this.state.mineCount)}
                    >
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