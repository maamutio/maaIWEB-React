import {Provider} from 'react-redux';
import GlobalState from './reducers';
import {createStore} from "redux";

import React from "react";
import App from "../App";

import {quizzes} from '../assets/mock-data';




export default class ReduxProvider extends React.Component{
    constructor(props) {
        super(props);
        this.initialState={
            score: 0,
            finished: false,
            currentQuiz: 0,
            quizzes:[
                ...quizzes
            ]
        };
        this.store = this.configureStore();
    }

    render() {
        return (
            <Provider store={this.store}>
                <div style={{height:'100%'}}>
                    <App/>
                </div>
            </Provider>
        );
    }
    configureStore(){
        return createStore(GlobalState,this.initialState);
    }
}