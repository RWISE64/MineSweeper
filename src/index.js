import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game/game';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

import './index.css';


library.add(faSlidersH);
/*
TODO:
Win condition check
- Uncover all non-mine squares, flags don't matter
Header: Mines left, time
Surrounding UI
Transitions?
Make class applications less terrible
*/
ReactDOM.render(
    <Game />,
    document.getElementById('root')
)