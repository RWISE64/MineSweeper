import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './display.css';

class Display extends React.Component {
    render() {
        return (
            <div className={'container sub-container display'}>
                <span>
                    <FontAwesomeIcon icon="flag" />
                    {this.props.remainingFlags}
                </span>
                <span>
                    <FontAwesomeIcon icon="stopwatch" />
                    {this.props.time}
                </span>
            </div>
        );
    }
}

export default Display;