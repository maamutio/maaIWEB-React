import React from 'react';
import '../css/Actionbar.css'

export default class Actionbar extends React.Component{
    render() {
        return (
            <div className={'ActionBar'}>
                <button className={'btn'} onClick={this.props.onPrevious} disabled={this.props.currentQuiz===0}>Previous</button>
                <button className={'btn-sub'} onClick={this.props.onSubmit}>Submit</button>
                <button className={'btn'} onClick={this.props.onNext} disabled={this.props.currentQuiz===this.props.nQuestions-1}>Next</button>
            </div>
        );
    }
}