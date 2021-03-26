import React from 'react';
import '../css/Score.css';

export default class Score extends React.Component{
    render() {
        return (
            <div className={'score'}>

                <p>Puntuacion: {this.props.score}</p>

            <div className={'restart'}>
                <button className={'reset'} onClick={this.props.onReset}><span>Reset</span></button>
            </div>

            </div>
        );
    }
}