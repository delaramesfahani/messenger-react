import React from 'react'
import Login from './component/login'
import Signup from './component/signup'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Messenger from './component/messenger/messenger'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import conversation from './reducer/convReducer'
import './App.css'

const store = createStore(conversation)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={Login} />
        <Route path='/signup/' component={Signup} />
        <Route path='/messenger/' component={Messenger} />
      </Router>
    </Provider>
  );
}

export default App;
