import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Form from './components/Form';


const styling = {
  bodyWrap: {
    color: 'black',
    display: 'flex',
    height: '100vh'
  }
}

const app = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <div style={styling.bodyWrap}>
            <ToDoList />

            <Switch>
              <Route path='/:listId' component={Form} />
              <Redirect from='/' to='/1' />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }                                           


export default app;
