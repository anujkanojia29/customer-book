import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './pages/home/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Navbar/>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={HomePage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
