import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './endBanner.css';

class EndBanner extends React.Component {
    render() {
        const faIcon = (this.props.result === 'win') ? 'angellist' : 'dizzy';
        const hidden = this.props.result === undefined ? ' hidden' : '';
        return (
            <div className={'banner' + hidden}>
                <div className={'container sub-container'}>
                    <div className={'banner-result'}>
                        <FontAwesomeIcon icon={faIcon} />
                        <span>{(this.props.result === 'win') ? 'Complete!' : 'Oops.'}</span>
                        <FontAwesomeIcon icon={faIcon} />
                    </div>
                    <div className={'banner-time'}>
                        <FontAwesomeIcon icon="stopwatch" />
                        <span>{this.props.time}</span>
                    </div>
                    <div>
                        <button onClick={() => this.props.onRestart()}>Restart</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EndBanner;