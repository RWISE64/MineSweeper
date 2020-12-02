import React from 'react';
import './square.css';

class Square extends React.Component {
    render() {
        let classes = (this.props.shaded) ? ' shaded' : '';
        let content = (this.props.mine) ? '*' : this.props.adjMineCount;
        return (
            <button
                className={'square' + classes}
                onClick={() => this.props.onClick()}
            >
                {content}
            </button>
        );
    }
}

export default Square;