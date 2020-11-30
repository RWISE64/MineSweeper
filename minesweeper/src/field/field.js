import React from 'react';
import Square from '../square/square';
import './field.css';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 10,
            width: 10,
        };
    }

    render() {
        let field = [];
        let row = [];
        for (let y = 0; y < this.state.height; y++) {
            for (let x = 0; x < this.state.width; x++) {
                row.push(
                    <Square
                        key={(y * this.state.width) + x}
                        // Shade kinda every other square for checkerboard pattern
                        shaded={((y * this.state.width) + x + y) % 2 == 0}
                    />
                );
            }
            field.push(
                <div className="row" key={'row' + y}>
                    {row}
                </div>
            );
            row = [];
        }
        return (
            <>
                {field}
            </>
        );
    }
}

export default Field;