import React from 'react';
import ReactDOM from 'react-dom';
import Field from './field/field'
import './index.css';

ReactDOM.render(
    <Field 
        height={10}
        width={10}
        mineCount={10}
    />,
    document.getElementById('root')
)