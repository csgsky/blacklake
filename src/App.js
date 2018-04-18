/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import Navigation from './config/router'

import rootEpic from './epic/index'
import rootReducer from './reducer/index'

const epicMiddleware = createEpicMiddleware(rootEpic)

console.disableYellowBox = true

const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(epicMiddleware)
    )
  )
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

