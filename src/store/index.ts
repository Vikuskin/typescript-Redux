import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/index";
import createSagaMiddleware from '@redux-saga/core';
import { sagaWatcher } from './saga.js';

const saga = createSagaMiddleware()

export const store = createStore(rootReducer, compose(applyMiddleware(thunk, saga)))

saga.run(sagaWatcher)