import React from 'react';
import './square.css';

class Square extends React.Component {
    render() {
        let square = this.props.square;
        let classes = (this.props.shaded) ? ' shaded' : '';
        classes += (square.mine && !square.hidden && !square.flagged) ? ' mine' : '';
        classes += (!square.hidden && !square.flagged) ? ' adjMines' + square.adjMineCount : '';
        classes += (square.flagged) ? ' flagged' : '';
        let content;
        if (square.flagged)
            content = '!';
        else if (square.hidden)
            content = null;
        else if (square.mine)
            content = '*'
        else
            content = square.adjMineCount;
        return (
            <button
                className={'square' + classes}
                onClick={() => this.props.onClick(square.x, square.y)}
                onContextMenu={(e) => {
                    e.preventDefault();
                    this.props.onRightClick(square.x, square.y);
                }}
            >
                {content}
            </button>
        );
    }
}

export default Square;