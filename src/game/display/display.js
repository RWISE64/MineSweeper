import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './display.css';

class Display extends React.Component {
    formatTime(time) {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        return ((mins > 0) ? (mins + ':') : '') + secs;
    }

    render() {
        return (
            <div className={'container sub-container display'}>
                <span>
                    <FontAwesomeIcon icon="flag" />
                    {this.props.remainingFlags}
                </span>
                <span>
                    <FontAwesomeIcon icon="stopwatch" />
                    {this.formatTime(this.props.time)}
                </span>
            </div>
        );
    }
}

export default Display;