import React from 'react';
import './square.css';

class Square extends React.Component {
    getClasses(shaded, square) {
        let classes = (shaded) ? ' shaded' : '';
        classes += (square.mine && !square.hidden && !square.flagged) ? ' mine' : '';
        classes += (!square.hidden && !square.flagged) ? ' adjMines' + square.adjMineCount : '';
        classes += (square.flagged) ? ' flagged' : '';
        return classes
    }

    getContent(square) {
        if (square.flagged)
            return '!';
        else if (square.hidden)
            return null;
        else if (square.mine)
            return '*';
        else
            return square.adjMineCount;
    }

    render() {
        const square = this.props.square;
        const classes = this.getClasses(this.props.shaded, square);
        const content = this.getContent(square);
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