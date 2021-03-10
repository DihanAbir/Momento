import React from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose  }  from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index'

import App from "./App";

const store = createStore( compose(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store = {store}>

<App/> 
    </Provider>

, document.getElementById('root') );