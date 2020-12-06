import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game/game';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSlidersH, faFlag, faStopwatch, faDizzy } from '@fortawesome/free-solid-svg-icons'

import './index.css';


library.add(fab, faSlidersH, faFlag, faStopwatch, faDizzy);
/*
TODO:
Transitions?
Make class applications less terrible
fix slide bug on odd square width
button styles
*/
ReactDOM.render(
    <Game />,
    document.getElementById('root')
)