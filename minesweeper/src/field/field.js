import React from 'react';
import Square from '../square/square';
import './field.css';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: props.height,
            width: props.width,
            mineCount: props.mineCount,
            // Creates a height x width array representing the squares of the field
            field: this.makeMineField(props.height, props.width, props.mineCount),
        };
    }


    // Creates a height x width array of squares
    makeMineField(height, width, mineCount) {
        // Could have just done the whole {mine: false, adjMineCount: 0} bity, but wanted to try something newer
        // Yeah, I haven't used objects much in JS which is kinda sad considering I do mostly frontend work...
        let Square = function (mine, adjMineCount) {
            this.mine = mine;
            this.adjMineCount = adjMineCount;
        }
        // Interesting way of creating an array... originally used .fill, but then all indices would reference the same square :/
        // Creates an array from the array-like object that has the desired length
        // Fill first array of length height with arrays of length width filled with new squares
        let field = Array.from({length: height}, () => (Array.from({length: width}, () => (new Square(false, 0)))));

        // Randomly figure out where to place the mines
        let mineSet = new Set();
        // Helper function for calculating random coords
        function randInt(max) {
            return Math.floor(Math.random() * max);
        }
        // Uses set to avoid duplicates, continues until set is large enough
        // So... unfortunately doesn't compare the values within objects, rather just the references
        // Using JSON.stringify to create primitive strings for each object, will use JSON.parse on removal
        while (mineSet.size < mineCount) {
            mineSet.add(JSON.stringify({x: randInt(width), y: randInt(height)}));
        }

        // Place the mines in field, incrementing adjMineCount in surrounding squares (include self for simplicity)
        mineSet.forEach(e => {
            // Necessary since I stored the objects as strings for the unfortunate reasons mentioned previously
            let coord = JSON.parse(e);
            // Set mine to true
            field[coord.y][coord.x].mine = true;
            // Increment adjMineCount in 3 x 3 square centered at coord
            for (let h = coord.y - 1; h <= coord.y + 1; h++) {
                for (let w = coord.x - 1; w <= coord.x + 1; w++) {
                    // Bounds check, just did continue since it tickled my fancy and avoids extra negation
                    if (h < 0 || h >= height || w < 0 || w >= width)
                        continue;
                    field[h][w].adjMineCount++;
                }
            }
        });

        return field;
    }

    render() {
        let field = [];
        let row = [];
        let keyCount = 0;
        let shaded = false;
        // Creates the grid based on this.state.field
        this.state.field.forEach(rowEl => {
            rowEl.forEach(squareEl => {
                row.push(
                    <Square
                        mine={squareEl.mine}
                        adjMineCount={squareEl.adjMineCount}
                        shaded={shaded}
                        key={keyCount++}
                    />
                );
                shaded = !shaded;
            });
            field.push(
                <div className="row" key={keyCount / this.state.width}>
                    {row}
                </div>
            );
            row = [];
            // Reverse shaded at end of row to offset shading of next row
            shaded = !shaded;
        });
        return (
            <>
                {field}
            </>
        );
    }
}

export default Field;