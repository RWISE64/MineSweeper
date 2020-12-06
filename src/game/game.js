import React from 'react';
import Field from './field/field';
import Display from './display/display';
import Controls from './controls/controls';
import './game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 10,
            width: 10,
            mineCount: 10,
            flagCount: 0,
        };
    }

    handleSubmit(height, width, mineCount) {
        this.setState({
            height: height,
            width: width,
            mineCount: mineCount,
        });
    }

    handleWin() {
        alert("ya won");
    }

    handleLoss() {
        alert("ha, loser");
    }

    render() {
        return (
            <div className="game-container">
                <div className="container main-container">
                    <Display />
                    <Field 
                        height={this.state.height}
                        width={this.state.width}
                        mineCount={this.state.mineCount}
                        onWin={() => this.handleWin()}
                        onLoss={() => this.handleLoss()}
                    />
                </div>
                <Controls 
                    handleSubmit={(height, width, mineCount) => this.handleSubmit(height, width, mineCount)}
                    height={this.state.height}
                    width={this.state.width}
                    mineCount={this.state.mineCount}
                />
            </div>
        );
    }
}

export default Game;