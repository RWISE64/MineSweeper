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
            remainingFlags: 10,
            started: false,
            time: 0,
        };
    }

    handleSubmit(height, width, mineCount) {
        clearInterval(this.state.timeInterval);
        this.setState({
            height: height,
            width: width,
            mineCount: mineCount,
            remainingFlags: mineCount,
            started: false,
            time: 0
        });
    }

    handleWin() {
        alert("ya won");
    }

    handleLoss() {
        alert("ha, loser");
    }

    handleFlagChange(addedFlag) {
        let remainingFlags = this.state.remainingFlags + ((addedFlag) ? -1 : 1);
        this.setState({remainingFlags: remainingFlags});
    }

    handleClick() {
        if (!this.state.started) {
            this.setState({started: true});
            // Start updating time every second
            let interval = setInterval(() => {
                let time = this.state.time + 1;
                this.setState({time: time});
            }, 1000);
            this.setState({timeInterval: interval});
        }
    }

    render() {
        return (
            <div className="game-container">
                <div className="container main-container">
                    <Display 
                        remainingFlags={this.state.remainingFlags}
                        time={this.state.time}
                    />
                    <Field 
                        height={this.state.height}
                        width={this.state.width}
                        mineCount={this.state.mineCount}
                        onWin={() => this.handleWin()}
                        onLoss={() => this.handleLoss()}
                        onFlagChange={(addedFlag) => this.handleFlagChange(addedFlag)}
                        onClick={() => this.handleClick()}
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