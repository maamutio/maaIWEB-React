//import logo from './logo.svg';
import React from "react";
import './App.css';
import {connect} from 'react-redux';
import Game from "./components/Game";
import {changeQuiz, initQuizzes, jumpQuiz, questionAnswer, submit} from "./redux/actions";
import Score from "./components/Score";
import NavBar from "./components/NavBar";
import {getAPI} from "./api";



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            loading:true,
            count:100
        };

    }

    render() {
        if (!this.props.finished) {
            return (
                <div className="App">
                    <header className={'head'}>
                        QUIZ    </header>
                    <p/>
                    <div className={'timer'}>
                        Quedan: {this.state.count} segundos
                        <p/>
                    </div>
                    <div className={'contenido'}>
                        <NavBar
                            nQuestions={this.props.quizzes.length}
                            currentQuiz={this.props.currentQuiz}
                            onN1={() => this.props.dispatch(jumpQuiz(0))}
                            onN2={() => this.props.dispatch(jumpQuiz(1))}
                            onN3={() => this.props.dispatch(jumpQuiz(2))}
                            onN4={() => this.props.dispatch(jumpQuiz(3))}
                            onN5={() => this.props.dispatch(jumpQuiz(4))}
                            onN6={() => this.props.dispatch(jumpQuiz(5))}
                            onN7={() => this.props.dispatch(jumpQuiz(6))}
                            onN8={() => this.props.dispatch(jumpQuiz(7))}
                            onN9={() => this.props.dispatch(jumpQuiz(8))}
                            onN10={() => this.props.dispatch(jumpQuiz(9))}
                        />
                        <Game
                            quiz={this.props.quizzes[this.props.currentQuiz]}
                            onQuestionAnswer={(answer) => {
                                this.props.dispatch(questionAnswer(this.props.currentQuiz, answer))
                            }}
                            currentQuiz={this.props.currentQuiz}
                            nQuestions={this.props.quizzes.length}
                            onPrevious={() => this.props.dispatch(changeQuiz(-1, this.props.quizzes.length))}
                            onNext={() => this.props.dispatch(changeQuiz(+1, this.props.quizzes.length))}
                            onSubmit={() => this.props.dispatch(submit(this.props.quizzes))}
                        />
                    </div>
                </div>
            );
        }
        return (
            <div className={'App'}>
                <header className={'head'}>QUIZ</header>
                <p/>
                <Score
                    score={this.props.score}
                    onReset={() => {
                        this.state.count =100;
                        fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=e3d25c39f410b7b9ae95")
                            .then(res => res.json())
                            .then(quizzes => {
                                this.props.dispatch(initQuizzes(quizzes))
                            })
                    }}
                />
            </div>
        )
    }

    download = async () => {
        let quizzes = await getAPI();
        this.props.dispatch(initQuizzes(quizzes));
    }

    async componentDidMount(){
        try {
            await this.download();
            setTimeout(()=>{
                this.setState({loading: false});
            },2000);

            this.myInterval = setInterval(()=>{
                this.setState({
                    count: this.state.count -1
                })
                if (this.state.count === 0){
                    this.props.dispatch(submit(this.props.quizzes));
                }
            }, 1000)


        } catch (e) {
            alert('ERROR');
        }
    }
    componentWillUnmount() {
        clearInterval(this.myInterval);
    }


}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(App);
