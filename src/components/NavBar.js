import React from 'react';
import '../css/NavBar.css';

export default class NavBar extends React.Component{
    render() {
        return (
            <div className={'bar'}>
                <button className={'btn1'} onClick={this.props.onN1} disabled={this.props.currentQuiz===0}>1</button>
                <button className={'btn1'} onClick={this.props.onN2} disabled={this.props.currentQuiz===1}>2</button>
                <button className={'btn1'} onClick={this.props.onN3} disabled={this.props.currentQuiz===2}>3</button>
                <button className={'btn1'} onClick={this.props.onN4} disabled={this.props.currentQuiz===3}>4</button>
                <button className={'btn1'} onClick={this.props.onN5} disabled={this.props.currentQuiz===4}>5</button>
                <button className={'btn1'} onClick={this.props.onN6} disabled={this.props.currentQuiz===5}>6</button>
                <button className={'btn1'} onClick={this.props.onN7} disabled={this.props.currentQuiz===6}>7</button>
                <button className={'btn1'} onClick={this.props.onN8} disabled={this.props.currentQuiz===7}>8</button>
                <button className={'btn1'} onClick={this.props.onN9} disabled={this.props.currentQuiz===8}>9</button>
                <button className={'btn1'} onClick={this.props.onN10} disabled={this.props.currentQuiz===9}>10</button>
            </div>
        );
    }
}