import React from 'react';
import './square.css';

class Square extends React.Component {
    render() {
        let classes = (this.props.shaded) ? ' shaded' : '';
        return (
            <button
                className={'square' + classes}
                onClick={() => this.props.onClick()}
            >
            </button>
        );
    }
}

export default Square;