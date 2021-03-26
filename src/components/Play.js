import React from 'react';
import '../css/Play.css';


export default class Play extends React.Component{

    render() {
        return (
            <div className={'play'}>
                <div className="Question">{this.props.quiz.question}</div>
                <input className={'text'}
                       placeholder={'Introduzca Respuesta'}
                       type="text" value={this.props.quiz.userAnswer || ''}
                       onChange={(e) => this.props.onQuestionAnswer(e.target.value)}
                       onKeyPress={(e)=>{
                           if(e.key === 'Enter'){
                               if(this.props.currentQuiz === this.props.nQuestions-1){
                                   this.props.onSubmit();
                               }
                               this.props.onNext();
                           }
                       }}

                />
            </div>
        );
    }
}