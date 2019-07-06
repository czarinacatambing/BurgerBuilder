import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import { Provider } from 'react-redux'

import burgerBuilderReducer from './store/reducers/burgerBuilder'
import orderReducer from './store/reducers/order'

import registerServiceWorker from './registerServiceWorker';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
})

const store = createStore(rootReducer ,composeEnhancers(
    applyMiddleware(thunk)
))

ReactDOM.render( <Provider store={store}> 
                    <BrowserRouter>
                        <App /> 
                    </BrowserRouter> 
                </Provider>, document.getElementById('root')
    );
registerServiceWorker();
