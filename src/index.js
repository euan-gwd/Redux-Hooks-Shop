import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import configureStore from './store/configureStore'
import Modal from 'react-modal'
import App from './components/App'
import './index.css'

const store = configureStore()

Modal.setAppElement('#root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)

serviceWorker.unregister()
