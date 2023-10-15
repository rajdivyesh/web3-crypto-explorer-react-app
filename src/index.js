import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { rootReducer } from './redux_reducers/'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import 'antd/dist/antd.min.css'
import { HashRouter } from 'react-router-dom'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById('root'))
