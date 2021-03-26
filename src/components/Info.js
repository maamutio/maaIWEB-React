import React from "react";
import '../css/Info.css'

export default class Info extends React.Component{
    render() {
        return (
            <div className={'info'}>
                <img className="question-img" src={this.props.quiz.attachment?.url} alt="city"/>
                <p/>
                <div className={'autor'}>
                    <div>Autor: {this.props.quiz.author?.username}</div>
                    <img className="author-img" src={this.props.quiz.author?.photo?.url} alt="autor"/>
                </div>
            </div>
        );
    }
}