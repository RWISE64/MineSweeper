import React from 'react';
import Field from './field/field';
import './game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 10,
            width: 10,
            mineCount: 10,
        };
    }

    render() {
        return (
            <>
                <Field 
                    height={this.state.height}
                    width={this.state.width}
                    mineCount={this.state.mineCount}
                />
            </>
        );
    }
}

export default Game;