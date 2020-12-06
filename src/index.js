import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game/game';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSlidersH, faFlag, faStopwatch, faDizzy, faChevronRight, faRedo } from '@fortawesome/free-solid-svg-icons'

import './index.css';


library.add(fab, faSlidersH, faFlag, faStopwatch, faDizzy, faChevronRight, faRedo);
/*
TODO:
Make class applications less terrible
*/
ReactDOM.render(
    <Game />,
    document.getElementById('root')
)