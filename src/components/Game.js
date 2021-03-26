import React from "react";
import Info from "./Info";
import Play from "./Play";
import Actionbar from "./Actionbar";
import '../css/Game.css';

export default class Game extends React.Component{
    render() {
        return (
            <div className={'game'}>
                <div className={'game-play'}>
                    <Info
                        currentQuiz={this.props.currentQuiz}
                        quiz={this.props.quiz}
                    />
                    <p/>
                    <Play
                        currentQuiz={this.props.currentQuiz}
                        quiz={this.props.quiz}
                        onQuestionAnswer={this.props.onQuestionAnswer}
                        onNext={this.props.onNext}
                        onSubmit={this.props.onSubmit}
                        nQuestions={this.props.nQuestions}
                    />
                </div>
                <Actionbar
                    currentQuiz={this.props.currentQuiz}
                    onSubmit={this.props.onSubmit}
                    onNext={this.props.onNext}
                    onPrevious={this.props.onPrevious}
                    nQuestions={this.props.nQuestions}
                />
            </div>
        );
    }
}