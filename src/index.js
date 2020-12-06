import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game/game';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSlidersH, faFlag, faStopwatch } from '@fortawesome/free-solid-svg-icons'

import './index.css';


library.add(faSlidersH, faFlag, faStopwatch);
/*
TODO:
Header: Mines left, time
Surrounding UI
Transitions?
Make class applications less terrible
fix slide bug on odd square width
*/
ReactDOM.render(
    <Game />,
    document.getElementById('root')
)