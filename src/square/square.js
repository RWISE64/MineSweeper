import React from 'react';
import './square.css';

class Square extends React.Component {
    render() {
        let square = this.props.square;
        let classes = (this.props.shaded) ? ' shaded' : '';
        classes += (square.mine && !square.hidden) ? ' mine' : '';
        classes += ' adjMines' + square.adjMineCount;
        let content = (square.hidden) ? null : ((square.mine) ? '*' : square.adjMineCount);
        return (
            <button
                className={'square' + classes}
                onClick={() => this.props.onClick(square.x, square.y)}
            >
                {content}
            </button>
        );
    }
}

export default Square;