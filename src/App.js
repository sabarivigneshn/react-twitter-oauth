import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRouter';
/* redux packages */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './redux/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <AppRouter />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
